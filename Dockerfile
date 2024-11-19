FROM node:20-alpine

WORKDIR /c/Users/User

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]