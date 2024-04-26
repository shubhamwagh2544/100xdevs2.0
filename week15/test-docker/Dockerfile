FROM node:16-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate
RUN npm run build

COPY . .

EXPOSE 3005

CMD [ "node", "dist/index.js" ]