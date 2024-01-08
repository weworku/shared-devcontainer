FROM ruby:3.1.4-bookworm
# rails6 が ruby3.1まで対応していないので、ruby3.1を指定する

RUN apt-get update && apt-get install -y \
  build-essential \
  libpq-dev \
  nodejs \
  npm \
  yarn \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g yarn \
  && gem install rails -v 6.1.7.6 \
  && gem install bundler:2.2.28 \
  && gem install sqlite3

WORKDIR /usr/src/app
COPY ./profile.d /etc/profile.d
# git clone で資材をここで取得
# 開発環境資材とプロジェクトの資材は分ける

# チュートリアルを行いたい場合は、以下のコメントを解除しdevcontainerに接続する
# RUN git clone https://github.com/WeWorku/react-tutorial.git /usr/src/app/ \
#  && cd ./tutorial-tic-tac-toe \
#  && npm install 
#  && npm start  # <- これするとNodeサーバーが上がりdevcontainerが一生起動待ちになる
