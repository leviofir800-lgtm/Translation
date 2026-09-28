// Cloudflare Worker that lets the translator app use Claude without putting the API key in the app.
//
// Setup (Cloudflare dashboard → Workers & Pages → your worker):
//   1. Paste this file as the worker's code and deploy.
//   2. Settings → Variables and Secrets → add two secrets:
//        ANTHROPIC_API_KEY  your Claude API key (sk-ant-...)
//        APP_CODE           the access code that goes in the app link (#code=...)
//
// The app sends its requests here with the access code; this worker checks the code,
// keeps the request within the limits below, adds the API key and forwards it to Claude.

const ALLOWED_ORIGINS = ['https://leviofir800-lgtm.github.io'];
const ALLOWED_MODELS = ['claude-opus-5', 'claude-sonnet-5', 'claude-haiku-4-5'];
const MAX_TOKENS = 2000;
const MAX_BODY_BYTES = 20000;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Headers': 'content-type, x-app-code',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
    };
    const reply = (status, obj) => new Response(JSON.stringify(obj), {
      status, headers: { ...cors, 'content-type': 'application/json' },
    });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return reply(405, { error: { message: 'POST only' } });
    if (!env.ANTHROPIC_API_KEY || !env.APP_CODE) return reply(500, { error: { message: 'Worker secrets are not set' } });
    if (request.headers.get('x-app-code') !== env.APP_CODE) return reply(401, { error: { message: 'Wrong access code' } });

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return reply(413, { error: { message: 'Request too large' } });
    let body;
    try { body = JSON.parse(raw); } catch { return reply(400, { error: { message: 'Bad JSON' } }); }
    if (!ALLOWED_MODELS.includes(body.model)) return reply(400, { error: { message: 'Model not allowed' } });

    // Forward only the fields the app uses.
    const out = {
      model: body.model,
      max_tokens: Math.min(Number(body.max_tokens) || MAX_TOKENS, MAX_TOKENS),
      system: body.system,
      messages: body.messages,
    };
    if (body.output_config) out.output_config = body.output_config;
    const headers = {
      'content-type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    };
    if (body.fallbacks === 'default') {
      out.fallbacks = 'default';
      headers['anthropic-beta'] = 'server-side-fallback-2026-07-01';
    }

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers, body: JSON.stringify(out),
    });
    return new Response(res.body, {
      status: res.status, headers: { ...cors, 'content-type': 'application/json' },
    });
  },
};
