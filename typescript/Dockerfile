FROM node:21-slim
RUN set -x \
  && apt update \
  && apt upgrade -y \
  && apt install -y git
RUN npm install -g typescript
ENV LESSCHARSET=utf-8

