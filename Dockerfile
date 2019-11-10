FROM node:latest

WORKDIR c:\worksplace\franksmile\survey\server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
