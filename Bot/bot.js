const { Telegraf } = require("telegraf");
const TOKEN = "7698901836:AAF_3XfsiihF73s3GOhH8vzzilG22myTHIU";
const bot = new Telegraf(TOKEN);

const web_link = "https://velvety-monstera-53938c.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Open Web App", web_app: { url: web_link } }]
      ]
    }
  })
);

bot.launch();
