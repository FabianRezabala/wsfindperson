FROM node:16

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

COPY package*.json ./

EXPOSE 3000

USER node

RUN npm install

COPY --chown=node:node . .

CMD ["node", "index.js"]