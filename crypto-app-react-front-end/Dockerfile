# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /CRYPTO-APP-REACT
# add `/app/node_modules/.bin` to $PATH
ENV PATH /CRYPTO-APP-REACT/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i --force
# add app
COPY . ./
# Expose port
EXPOSE 3005
# start app
CMD ["npm", "start"]