require("dotenv").config()

const { Client, GatewayIntentBits, ActivityType, Events, MessageFlags, PresenceUpdateStatus } = require("discord.js")

const bot_name = process.env.BOT_NAME

function t(lng) {
  switch(lng) {
    case 'en-US':
    case 'en':
    default:
      return `${bot_name} is down for maintenance. Try again in a few minutes!`
  }
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  presence: {
    activities: [
      {
        name: "Down for maintenance",
        type: ActivityType.Custom,
      },
    ],
    status: PresenceUpdateStatus.DoNotDisturb,
  },
})

client.on(Events.InteractionCreate, (interaction) => {
  interaction.reply({
    content: t(interaction.locale),
    flags: MessageFlags.Ephemeral,
  })
})
client.once(Events.ClientReady, (client) => console.log(`Ready! Logged in as ${client.user.tag}`))

client.login(process.env.BOT_TOKEN)
