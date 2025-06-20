FROM node:slim
WORKDIR /app

COPY . .
EXPOSE 3000

COPY package*.json ./

ENTRYPOINT start npm
