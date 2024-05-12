# Shared-devcontainer react-devcontainer の使い方

## このワークコンテナについて

Alpine ベースの python コンテナ。
python を使った開発用を想定。

### インストール済み
Dockerfile、および .devcontainer/devcontainers.json 参照。

### プロジェクトの始め方
特になし。

## Optinal

### .dotfiles

コンテナにて以下のコピーを行っており、配下の`alias.sh`がコピーされる
`COPY ./profile.d /etc/profile.d`

`ll='ls -la'` を定義しているのでいい感じに使うこと
その他、コンテナ共通で反映したい定義があれば PR を作って入れて欲しい
※個人の設定は入れないこと！！

### TODO

* オーソドックスなPythonパッケージ開発のお膳立てを整える
