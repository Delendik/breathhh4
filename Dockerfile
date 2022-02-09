FROM node:14.17.0-alpine3.10
COPY package.json yarn.lock ./
RUN yarn
COPY . .
ARG REACT_APP_PADDLE_VENDOR_ID
ARG REACT_APP_PADDLE_SANDBOX
RUN yarn build
CMD [ "yarn", "serve" ]
