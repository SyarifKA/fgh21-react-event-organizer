# FROM node:alpine

# WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./

# COPY . /app/

# RUN npm install

# CMD [ "npm", "run", "dev" ]

# FROM node:lts-alpine

# WORKDIR /app

# COPY . /app/

# RUN npm install -g serve@latest
# RUN npm install
# RUN npx vite build

# ENTRYPOINT cd dist && serve -l tcp://0.0.0.0:5000

FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

ARG VITE_APP_BACKENDURL
ENV VITE_APP_BACKENDURL=$VITE_APP_BACKENDURL

RUN npm install -g serve@latest
RUN npm install
RUN npm run build

FROM nginx:1.25.4-alpine-slim AS prod

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 5000

CMD [ "nginx", "-g", "daemon off;" ]