FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
