// Test sentences for the built-in test mode (open the app with #test).
// Each group runs as its own conversation, so later lines can depend on earlier ones.
window.TEST_GROUPS = [
  // ---- Hebrew -> Thai: everyday work instructions ----
  { name: 'he→th instructions', turns: [
    { lang: 'he', to: 'th', text: 'תלך לחממה של יעקב ותקטוף את העגבניות' },
    { lang: 'he', to: 'th', text: 'מחר מתחילים ברבע לשש אל תאחרו' },
    { lang: 'he', to: 'th', text: 'יאללה חבר׳ה תכף מסיימים עוד שורה אחת' },
    { lang: 'he', to: 'th', text: 'תשים את הארגזים המלאים ליד השער ואת הריקים בפנים' },
    { lang: 'he', to: 'th', text: 'אל תרסס היום יש רוח חזקה' },
    { lang: 'he', to: 'th', text: 'מי שמרסס חייב לשים מסכה וכפפות' },
    { lang: 'he', to: 'th', text: 'תבדוק שהטפטפות לא סתומות בשורה שלוש' },
    { lang: 'he', to: 'th', text: 'העגבניות האלה עוד ירוקות תשאיר אותן לשבוע הבא' },
    { lang: 'he', to: 'th', text: 'המשכורת תיכנס ביום חמישי' },
    { lang: 'he', to: 'th', text: 'אחלה עבודה היום כל הכבוד' },
    { lang: 'he', to: 'th', text: 'מי רוצה לעבוד שעות נוספות בשבת' },
    { lang: 'he', to: 'th', text: 'אם מישהו מרגיש לא טוב שיגיד לי מיד' },
    { lang: 'he', to: 'th', text: 'בשבע וחצי בערב יש אזעקה אתם הולכים למרחב המוגן' },
    { lang: 'he', to: 'th', text: 'תעשה לי טובה תביא את המפתחות של הטרקטור' },
    { lang: 'he', to: 'th', text: 'זה לא בסדר ככה אתה זורק לי חצי מהפרי' },
    { lang: 'he', to: 'th', text: 'כמה ארגזים הספקתם עד עכשיו' },
  ]},
  // ---- Thai -> Hebrew: workers speaking, incl. Isan words and recognition-style input ----
  { name: 'th→he workers', turns: [
    { lang: 'th', to: 'he', text: 'นายครับวันนี้ผมไม่สบายขอไปหาหมอได้ไหมครับ' },
    { lang: 'th', to: 'he', text: 'บ่มีน้ำในห้องน้ำเด้อนาย' },
    { lang: 'th', to: 'he', text: 'แอร์ในห้องพักเสียครับร้อนมากนอนไม่ได้' },
    { lang: 'th', to: 'he', text: 'เงินเดือนเดือนนี้ยังไม่เข้าครับ' },
    { lang: 'th', to: 'he', text: 'มะเขือเทศแถวนี้เก็บหมดแล้วจะให้ไปทำอะไรต่อครับ' },
    { lang: 'th', to: 'he', text: 'ข่อยบ่เข้าใจเด้อเว้าอีกเทื่อได้บ่' },
    { lang: 'th', to: 'he', text: 'ปั๊มน้ำมันรั่วตรงท่อสีดำครับ' },
    { lang: 'th', to: 'he', text: 'พรุ่งนี้ผมขอลาครึ่งวันไปธนาคารครับ' },
    { lang: 'th', to: 'he', text: 'สมชายโดนมีดบาดมือเลือดออกเยอะครับ' },
    { lang: 'th', to: 'he', text: 'โอเคครับนายเดี๋ยวผมจัดการให้' },
    { lang: 'th', to: 'he', text: 'ขอบคุณมากครับ' },
    { lang: 'th', to: 'he', text: 'รถแทรกเตอร์สตาร์ทไม่ติดครับแบตน่าจะหมด' },
  ]},
  // ---- A short conversation: the answers depend on what was said before ----
  { name: 'conversation', turns: [
    { lang: 'he', to: 'th', text: 'איפה המזמרה הגדולה' },
    { lang: 'th', to: 'he', text: 'อยู่ในรถกระบะครับ' },
    { lang: 'he', to: 'th', text: 'תביא לי אותה בבקשה' },
    { lang: 'th', to: 'he', text: 'ได้ครับเดี๋ยวเอาไปให้' },
    { lang: 'he', to: 'th', text: 'ואחרי זה תעזור לסומצ׳אי בחממה שתיים' },
  ]},
  // ---- English, sometimes used on the farm ----
  { name: 'English', turns: [
    { lang: 'en', to: 'th', text: 'Please check the water pressure before you start the pump' },
    { lang: 'th', to: 'en', text: 'ปั๊มเสียงดังแปลกๆครับ' },
    { lang: 'he', to: 'en', text: 'המשאית מגיעה בעשר תכינו את המשטחים' },
  ]},
];
