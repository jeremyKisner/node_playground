FROM node:14
WORKDIR /home/jkisner/go/com.github/node_playground
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]