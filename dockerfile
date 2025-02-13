# Use a stable Node.js image
FROM node:18 AS base



FROM base AS development

WORKDIR /app

COPY package*.json /app/

RUN npm install 

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start-dev"]




FROM base AS production
WORKDIR /app

COPY package*.json /app/

RUN npm install --only=production

COPY . .

EXPOSE 8000

CMD ["npm", "start"]


