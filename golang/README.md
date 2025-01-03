# Shared-devcontainer dotnet-devcontainer の使い方

## このワークコンテナについて

Alpine ベースの Golang コンテナ。
Go を使った開発用を想定。

### インストール済み
Dockerfile、および .devcontainer/devcontainers.json 参照。

### プロジェクトの始め方

プロジェクトの作成(モジュール)
```
mkdir hello
cd hello
go mod init your.package/hello
```

`go.mod`ファイルが作成されるだけ。隠しフォルダなどはない。

For details: https://go.dev/doc/tutorial/getting-started

## Optional

### dotfiles

コンテナにて以下のコピーを行っており、配下の`alias.sh`がコピーされる
`COPY ./profile.d /etc/profile.d`

`ll='ls -la'` を定義しているのでいい感じに使うこと
その他、コンテナ共通で反映したい定義があれば PR を作って入れて欲しい
※個人の設定は入れないこと！！

### TODO

