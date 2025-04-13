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
    ca-certificates \
    gnupg \
  && install -m 0755 -d /etc/apt/keyrings \
  && curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg \
  && chmod a+r /etc/apt/keyrings/docker.gpg \
  && echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null \
  && apt-get update \
  && apt-get install -y docker-ce-cli docker-compose-plugin \
  && rm -rf /var/lib/apt/lists/* \
  && gem install rails -v 8 \
  && gem install pg \
  && gem install --development rubocop \
  && useradd -m -s /bin/bash -G sudo -u 1000 rails

COPY ./profile.d /etc/profile.d
WORKDIR /usr/src/app
COPY ./README.md /usr/src/README.md

USER rails

CMD ["sleep", "infinity"]
