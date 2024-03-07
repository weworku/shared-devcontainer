#FROM node:21-alpine3.18
FROM node:21-slim
RUN set -x \
  && apt update \
  && apt upgrade -y \
  && apt install -y git
ENV LESSCHARSET=utf-8
WORKDIR /usr/src/app
# COPY ./profile.d/alias.sh /etc/profile.d
# COPY ./profile.d/.git-* ~/
# COPY ./profile.d/.bash_profile ~/

# git clone で資材をここで取得
# 開発環境資材とプロジェクトの資材は分ける

# チュートリアルを行いたい場合は、以下のコメントを解除しdevcontainerに接続する
# RUN git clone https://github.com/WeWorku/react-tutorial.git /usr/src/app/ \
#   && cd ./tutorial-tic-tac-toe \
#   && npm install 
#  && npm start  # <- これするとNodeサーバーが上がりdevcontainerが一生起動待ちになる
