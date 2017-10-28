FROM node

MAINTAINER bqliu@thoughtworks.com

EXPOSE 3000

COPY . /todolist

WORKDIR /todolist

RUN npm install web pack -g
RUN npm install
RUN npm run webpack

CMD npm start