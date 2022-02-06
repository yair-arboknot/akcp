FROM node:16-alpine

WORKDIR /service

COPY . /service

RUN npm i --production

RUN npm run build

EXPOSE 3000

CMD npm run start

