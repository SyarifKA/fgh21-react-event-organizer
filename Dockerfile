FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY . /app/

RUN npm install

CMD [ "npm", "run", "dev" ]