# Maintenance Bot

This tiny little bot is designed to step in when a different bot is down for maintenance. By using the other bot's credentials, Maintenance Bot can provide a simple, helpful response whenever someone tries to use a command or click a button. This way, the user doesn't get an unhelpful error message.

## Usage

To use Maintenance Bot, you need to supply the credentials for the bot you want to handle. These are set using environment variables:

* `BOT_TOKEN`: Target bot application token
* `CLIENT_ID`: ID of the bot's discord user
* `BOT_NAME`: Name of the bot that's down

Once those are set, turn the main bot off and run `yarn start` to let Maintenance Bot handle requests. When you're ready to switch back over, turn off Maintenance Bot first, then start up the original bot.

## Development

Maintenance Bot is intentionally lightweight. It uses Node 18+ and Yarn for management, making use of Yarn's PNP mode to avoid downloading packages at runtime.
