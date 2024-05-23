# syntax=docker/dockerfile:1
FROM node:20-slim
WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm  # Install pnpm globally
RUN pnpm install

COPY . .

EXPOSE 1420

CMD ["pnpm", "start"]
