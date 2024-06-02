FROM node:18-alpine

WORKDIR /app
COPY . .

WORKDIR /app/api
RUN npm install --only=production
RUN npm install -g firebase-tools

ENV GOOGLE_APPLICATION_CREDENTIALS=/app/api/src/config/firebaseKey.json

CMD ["npm", "run", "serve"]

EXPOSE 4000 5001 4500 9005