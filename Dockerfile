FROM node:8.8

WORKDIR /usr/src/app
COPY . .
RUN npm rebuild node-sass
RUN npm run prod
EXPOSE 3000
CMD [ "node", "server/index.js" ]
