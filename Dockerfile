FROM node:14.17.0-alpine3.10
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
CMD [ "yarn", "serve" ]
