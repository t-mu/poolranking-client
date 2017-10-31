FROM node:boron

WORKDIR /usr/src/app
COPY . .
RUN npm run prod
EXPOSE 3000
CMD [ "npm", "start" ]
