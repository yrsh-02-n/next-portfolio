FROM node:18-alpine

WORKDIR /app

# package files
COPY package*.json ./

# install
RUN npm install

# other files
COPY . .

# production build
RUN npm run build

# delete devDeps
RUN npm prune --production

# open port
EXPOSE 3000

# run app
CMD ["npm", "start"]