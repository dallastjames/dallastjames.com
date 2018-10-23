FROM node:10-alpine as build
WORKDIR /opt/app
COPY *.json ./
COPY apps apps/
COPY libs libs/
RUN npm ci
RUN npm run dallastjames:build:prod
RUN npm run dallastjames:build:server
RUN npm run dallastjames:build:webpack

FROM keymetrics/pm2:latest-alpine as deploy
WORKDIR /opt/app
COPY --from=build /opt/app/dist /opt/app/dist/
COPY pm2.json .
COPY package.json .
CMD ["pm2-runtime", "start", "pm2.json"]
