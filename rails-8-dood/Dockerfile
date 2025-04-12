FROM ruby:3.4-slim

RUN set -x \
  && apt-get update \
  && apt-get install -y \
    build-essential \
    libsqlite3-dev \
    libpq-dev \
    tzdata \
    curl \
    git \
    vim \
    jq \
  && rm -rf /var/lib/apt/lists/* \
  && gem install rails -v 8 \
  && gem install pg \
  && gem install --development rubocop \
  && useradd -m -s /bin/bash -G sudo -u 1000 rails

COPY ./profile.d /etc/profile.d
WORKDIR /usr/src/app
COPY ./README.md /usr/src/README.md

USER rails

CMD ["/bin/bash", "-l"]
