FROM python:2.7

LABEL "com.github.actions.name"="slack notifier"
LABEL "com.github.actions.description"="Notify slack"
LABEL "com.github.actions.icon"="book-open"
LABEL "com.github.actions.color"="green"

RUN pip install slackclient

COPY slack-notifier.py /notifier/slack-notifier.py

WORKDIR /notifier

ENTRYPOINT ["python", "/notifier/slack-notifier.py"]
