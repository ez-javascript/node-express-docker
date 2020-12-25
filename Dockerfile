FROM node:12

# Create work directory
WORKDIR /usr/src/app

COPY package.json .

# Install all dependencies
RUN npm install

# Bundle app source code
COPY . .

# Expose port and run app
EXPOSE 80
CMD [ "node", "server.js" ]