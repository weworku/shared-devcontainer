FROM alpine:3.19.0
RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add git \
  && apk add sqlite \
  && apk add sqlite-dev 

# WORKDIR /usr/src/app
# COPY ./profile.d /etc/profile.d
