FROM php:alpine
RUN set -x \
  && apk update --no-cache \
  && apk upgrade --no-cache \
  && apk add --no-cache git less vim curl musl-dev gcc make \
  && wget https://raw.githubusercontent.com/composer/getcomposer.org/76a7060ccb93902cd7576b67264ad91c8a2700e2/web/installer -O - -q | php -- --quiet \
  && mv composer.phar /usr/local/bin/composer \
  && composer global require laravel/installer \
  && composer global require phpunit/phpunit
ENV LESSCHARSET=utf-8
ENV PAGER=less
WORKDIR /usr/src/app
COPY ./profile.d/alias.sh /etc/profile.d
