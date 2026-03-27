FROM node:20-alpine

WORKDIR /app

# package files
COPY package*.json ./

# clean npm cache and install fresh
RUN npm cache clean --force || true
RUN rm -rf node_modules
RUN npm install

# other files
COPY . .

# env variables for build
ARG SANITY_STUDIO_PROJECT_ID
ARG SANITY_STUDIO_DATASET
ENV SANITY_STUDIO_PROJECT_ID=${SANITY_STUDIO_PROJECT_ID}
ENV SANITY_STUDIO_DATASET=${SANITY_STUDIO_DATASET}

# production build
RUN npm run build

# delete devDeps
RUN npm prune --production

# open port
EXPOSE 3000

# run app
CMD ["npm", "start"]
