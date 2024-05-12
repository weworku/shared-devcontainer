FROM python:3-alpine
RUN set -x \
  && apk update --no-cache \
  && apk upgrade --no-cache \
  && apk add --no-cache git less vim curl musl-dev gcc make python3-dev py3-pytest
ENV LESSCHARSET=utf-8
ENV PAGER=less
WORKDIR /usr/src/app
COPY ./profile.d/alias.sh /etc/profile.d
