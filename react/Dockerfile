FROM node:21-alpine3.18
RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add git
WORKDIR /usr/src/app
COPY ./profile.d /etc/profile.d
# git clone で資材をここで取得
# 開発環境資材とプロジェクトの資材は分ける

# チュートリアルを行いたい場合は、以下のコメントを解除しdevcontainerに接続する
# RUN git clone https://github.com/WeWorku/react-tutorial.git \
#   && npm install \
#   && npm start
