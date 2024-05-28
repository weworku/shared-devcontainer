# Shared-devcontainer dotnet-devcontainer の使い方

## このワークコンテナについて

Alpine ベースの .Net core コンテナ。
.Net を使った開発用を想定。

### インストール済み
Dockerfile、および .devcontainer/devcontainers.json 参照。

### プロジェクトの始め方

プロジェクトの作成(コンソールアプリ)
```
dotnet new console -n MyApp
```

プロジェクトの作成(ライブラリ)
```
dotnet new classlib -n MyLib
dotnet new xunit -n MyLibTest
cd MyLibTest
dotnet add reference ../MyLib/MyLib.csproj
```
テストプロジェクトのテンプレートは`munit`(MSTest), `nunit`(NUnit), `xunit`(xUnit)の３種類ある。
好きなやつをチョイス。

## Optional

### dotfiles

コンテナにて以下のコピーを行っており、配下の`alias.sh`がコピーされる
`COPY ./profile.d /etc/profile.d`

`ll='ls -la'` を定義しているのでいい感じに使うこと
その他、コンテナ共通で反映したい定義があれば PR を作って入れて欲しい
※個人の設定は入れないこと！！

### TODO

