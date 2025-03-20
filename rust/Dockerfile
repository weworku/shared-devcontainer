FROM rust:alpine
LABEL version="0.1.0" maintainer="js4000all@gmail.com"

RUN set -x \
  && apk update --no-cache \
  && apk upgrade --no-cache \
  && apk add --no-cache \
    git \
    less \
    vim \
    curl \
    make \
    g++ \
    musl-dev \
    pkgconf \
    openssl-dev \
    perl \
  && rustup component add \
    clippy \
    rustfmt \
  && cargo install \
    cargo-edit \
    cargo-watch \
    cargo-tree \
  && cargo install --features vendored-openssl \
    sccache \
  && adduser --disabled-password dev
ENV LESSCHARSET=utf-8
ENV PAGER=less
WORKDIR /usr/src/app
COPY ./profile.d/alias.sh /etc/profile.d
USER dev
