FROM python:3-alpine
LABEL version="0.1.0" maintainer="js4000all@gmail.com"

RUN set -x \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && apk update --no-cache \
  && apk upgrade --no-cache \
  && apk add --no-cache git less vim curl dotnet8-sdk
ENV LESSCHARSET=utf-8
ENV PAGER=less
WORKDIR /usr/src/app
COPY ./profile.d/alias.sh /etc/profile.d
