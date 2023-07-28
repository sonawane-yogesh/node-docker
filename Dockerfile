# syntax=docker/dockerfile:1.2-labs
FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "./"]
ENV CONNECTION_STRING=''
ENV SERVER_PORT=8000
RUN npm install --omit=dev
# RUN --network=host
COPY . .
EXPOSE 8000
EXPOSE 9229
CMD ["npm", "run", "debug"]