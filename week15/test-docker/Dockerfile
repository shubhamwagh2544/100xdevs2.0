FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3005

# CMD ["npm", "start"]
CMD [ "node", "dist/index.js" ]