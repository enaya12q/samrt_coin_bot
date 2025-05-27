require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// استخدام التوكن من المتغيرات البيئية أو مباشرة
const token = process.env.TELEGRAM_BOT_TOKEN || '8021609729:AAHcx4JJRZLTDZuDvtuHD0wT2TmkIt3-enM';

// إنشاء كائن البوت
const bot = new TelegramBot(token, { polling: true });

// رسالة الترحيب
const welcomeMessage = `
مرحباً بك في بوت Smart Coin! 🪙

أنت الآن جزء من مجتمع Smart Coin للتعدين الذكي.

يمكنك الآن:
• الحصول على 15 عملة يومياً من خلال التعدين
• شراء حزم تعدين لزيادة أرباحك
• دعوة أصدقائك والحصول على مكافآت
• إكمال المهام للحصول على عملات إضافية

قم بزيارة موقعنا للبدء:
https://smartcoin.app
`;

// الاستماع لأمر /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // إرسال رسالة الترحيب
  bot.sendMessage(chatId, welcomeMessage, {
    parse_mode: 'Markdown',
    disable_web_page_preview: true
  });
  
  console.log(`مستخدم جديد بدأ المحادثة: ${msg.from.username || msg.from.first_name} (${chatId})`);
});

// الاستماع لأي رسالة أخرى
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // تجاهل الأوامر
  if (msg.text && msg.text.startsWith('/')) {
    return;
  }
  
  // الرد على أي رسالة أخرى
  bot.sendMessage(chatId, `مرحباً! يرجى زيارة موقعنا للوصول إلى جميع الميزات: https://smartcoin.app`);
});

console.log('بوت Smart Coin قيد التشغيل...');
