FROM node:20.9-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5173
