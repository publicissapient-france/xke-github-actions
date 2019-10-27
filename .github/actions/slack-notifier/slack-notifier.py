#!/usr/bin/env python
import time, os, sys
from slackclient import SlackClient

botToken = os.getenv('SLACK_TOKEN')
botUsername = os.getenv('SLACK_BOT')
botChannel = os.getenv('SLACK_CHANNEL')

if len(sys.argv) > 1:
    msg = sys.argv[1]
else:
    msg = "Test Message - Hello World"

if not botToken:
    print("A slack token is required using ENV of SLACK_TOKEN")
    sys.exit(1)

if not botUsername:
    botUsername = "slackbot"
    asUser = True
else:
    asUser = False

if not botChannel:
    botChannel = "#general"

sc = SlackClient(botToken)

print(sc.api_call("chat.postMessage", channel=botChannel, username=botUsername, as_user=asUser, text=msg))
