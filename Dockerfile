FROM node:16

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

EXPOSE 3000

RUN npm i

CMD ["node", "index.js"]