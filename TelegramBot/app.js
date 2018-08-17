const Telegraf = require('telegraf')

const BOT_TOKEN = '591333535:AAEt8h50_WfSVNh7sV9fOOibdJm2IaIXgc0'

const bot = new Telegraf(BOT_TOKEN)

bot.command('start', (ctx) => ctx.reply('Hello'))
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.startPolling()
