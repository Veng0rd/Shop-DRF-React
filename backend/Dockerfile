FROM python:3.12.0-alpine3.18

LABEL authors="Veng0rd"

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR .

#RUN apk add postgresql-client build-base postgresql-dev

COPY requirements.txt .

RUN pip3 install --upgrade pip \
    && pip3 install -r requirements.txt --no-cache-dir

COPY . .

EXPOSE 8000
