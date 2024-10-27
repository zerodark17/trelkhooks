const TelegramBot = require('node-telegram-bot-api');

// Reemplaza con el token que obtuviste de BotFather
const token = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';

// Crear una instancia del bot
const bot = new TelegramBot(token, {polling: true});

// Responder al comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '¡Bienvenido! Envíame un mensaje y te responderé.');
});

// Responder a cualquier mensaje de texto
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  // Responder con "Hola" a cualquier mensaje
  bot.sendMessage(chatId, 'Hola');
});
