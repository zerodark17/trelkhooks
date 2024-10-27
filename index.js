const TelegramBot = require('node-telegram-bot-api');

// Reemplaza con el token que obtuviste de BotFather
const token = '7588166869:AAGroOeWsYbM_QmovwQmf6RvYFZ_maalwI0';

// Crear una instancia del bot
const bot = new TelegramBot(token, {polling: true});


// Responder a cualquier mensaje de texto
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Responder con "Hola" a cualquier mensaje
bot.sendMessage(chatId, 'This bot only sends alerts. To interact, please go to @TrelkBot.');
});
