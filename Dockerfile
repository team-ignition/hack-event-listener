FROM node:8
WORKDIR ./usr/src/app
COPY package*.json ./
ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "start" ]
