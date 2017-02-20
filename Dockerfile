FROM mhart/alpine-node:6.1.0
MAINTAINER Ross Hendry "rhendry@googlemail.com"

ARG env=production
ENV NODE_ENV ${env}
ADD . /opt/apps/profiles-service
WORKDIR /opt/apps/profiles-service

RUN npm install && npm cache clean
EXPOSE 8101
CMD ["npm", "start"]
