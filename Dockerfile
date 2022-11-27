FROM node:14-alpine
WORKDIR /usr/src/portfolio
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i
RUN npm run build
RUN npm i -g serve
CMD [ "serve", "-s", "build" ]