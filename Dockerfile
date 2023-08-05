# syntax=docker/dockerfile:1.2-labs
FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "./"]
ENV CONNECTION_STRING=''
ENV SERVER_PORT=8000
RUN npm install --omit=dev
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
# If need to start server using nodemon
# EXPOSE 9229
# CMD ["npm", "run", "debug"]