const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Обработка команды /start
bot.command("start", (ctx:any) => {
  ctx.reply("Добро пожаловать!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть Mini App",
            web_app: { url: "https://ваш-сайт.com" },
          },
        ],
      ],
    },
  });
});

// Обработка данных из Mini App
bot.on("web_app_data", (ctx:any) => {
  const data = ctx.webAppData.data; // Данные, отправленные из Mini App
  console.log("Получены данные:", data);
  ctx.reply(`Получено: ${data}`);
});

bot.launch();
