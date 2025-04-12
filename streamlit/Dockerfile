FROM python:3.12-slim
RUN set -x \
  && apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y \
    git \
    less \
    curl \
    vim \
    jq \
    build-essential \
  && rm -rf /var/lib/apt/lists/* \
  && pip install --upgrade pip \
  && pip install --no-cache-dir \
    streamlit \
    pandas \
    numpy \
    requests \
    streamlit-chat \
    streamlit-extras \
    streamlit-elements \
    streamlit-pandas \
  && useradd -m appuser

ENV LESSCHARSET=utf-8

COPY ./profile.d/alias.sh /etc/profile.d
COPY README.md /usr/src/README.md

EXPOSE 8501

USER appuser
WORKDIR /usr/src/app
