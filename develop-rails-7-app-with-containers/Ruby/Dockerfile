FROM ruby:3.1.4-alpine3.19
# rails6 が ruby3.1まで対応していないので、ruby3.1を指定する

RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add git 

# bundle install で sqlite3 の gem がインストールされる 
RUN apk add --update --no-cache \
  build-base \
  nodejs \
  yarn \
  tzdata \
  postgresql-dev \
  sqlite-dev \
  && gem update --system \
  && gem install bundler:2.5.4 \ 
  && gem install rails:6.1.7.3 

WORKDIR /usr/src/app
COPY ./profile.d /etc/profile.d
# git clone で資材をここで取得
# 開発環境資材とプロジェクトの資材は分ける

# チュートリアルを行いたい場合は、以下のコメントを解除しdevcontainerに接続する
# RUN git clone https://github.com/WeWorku/react-tutorial.git /usr/src/app/ \
#  && cd ./tutorial-tic-tac-toe \
#  && npm install 
#  && npm start  # <- これするとNodeサーバーが上がりdevcontainerが一生起動待ちになる
