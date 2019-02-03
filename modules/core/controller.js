import path from 'path';
import TelegramBot from 'node-telegram-bot-api';

// export default { };

export const CoreController = {};
export default { CoreController };

CoreController.landing = (req, res) => {
    const token = '';
    const bot = new TelegramBot(token, {polling: true});

    bot.on('message', (msg) => {
        bot.sendMessage(msg.chat.id, 'Test! No crust.');
    });
}