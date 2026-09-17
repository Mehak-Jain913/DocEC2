FROM node:trixie-slim


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ["node", "server.js"]