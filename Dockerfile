FROM node:16

RUN apt-get update

RUN apt-get install libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0 libgbm-dev -y

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "/home/node/app/src/index.js"]