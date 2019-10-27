# Slack notifier

This action wraps the Slack [chat.postMessage](https://api.slack.com/methods/chat.postMessage) API method for posting to channels, private groups, and DMs.  
This action sends messages using [Slack bot tokens](https://api.slack.com/docs/token-types)

## Usage:

slack-notifier action will need 4 variables :
```yaml
SLACK_TOKEN : the token of your bot
SLACK_CHANNEL : the channel where you want to send your notification (Note that your bot should be prior added to this channel)
SLACK_BOT : The name of message sender that will be displayed in Slack
MESSAGE : The message you want to send
```

## Formatting messages

Please refer to [Slack's documentation](https://api.slack.com/docs/messages) on message formatting. They also have a [message builder](https://api.slack.com/docs/messages/builder) that's great for playing around and previewing messages. Your messages can contain attachments, markdown, buttons, and more.

