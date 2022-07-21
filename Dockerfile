FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY ./ ./
RUN npm run build
EXPOSE 3000
USER node
CMD ["npm", "run", "start"]