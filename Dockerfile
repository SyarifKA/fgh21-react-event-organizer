# FROM node:alpine

# WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./

# COPY . /app/

# RUN npm install

# CMD [ "npm", "run", "dev" ]

FROM node:lts-alpine

WORKDIR /app

COPY . /app/

RUN npm install -g serve@latest
RUN npm install
RUN npx vite build

ENTRYPOINT cd dist && serve -l tcp://0.0.0.0:5000