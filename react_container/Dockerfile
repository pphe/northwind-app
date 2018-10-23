FROM node:latest
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
RUN npm install
RUN npm install react-scripts -g
CMD npm start
