FROM python:2.7

RUN pip install slackclient

COPY slack-notifier.py /notifier/slack-notifier.py

WORKDIR /notifier

ENTRYPOINT ["python", "/notifier/slack-notifier.py"]
