FROM mhart/alpine-node:6.1.0
MAINTAINER Ross Hendry "rhendry@googlemail.com"

ARG env=production
ENV NODE_ENV ${env}
RUN mkdir -p /opt/apps/profiles-service
ADD package.json /opt/apps/profiles-service/
WORKDIR /opt/apps/profiles-service
RUN npm install && npm cache clean
ADD . /opt/apps/profiles-service

EXPOSE 8101
CMD ["npm", "start"]
