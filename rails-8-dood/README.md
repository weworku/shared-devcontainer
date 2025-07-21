# Rails 8 開発環境

このプロジェクトは、Dockerコンテナ上でRails 8の開発環境を提供しますわ。

## 開発環境のセットアップ

### 1. プロジェクトの初期化

まず、新しいRailsプロジェクトを作成しますの。

```bash
rails new . --database=postgresql --css=tailwind
```

### 2. データベースの設定

PostgreSQLのデータベースを作成しますわ。

```bash
rails db:create
rails db:migrate
```

### 3. 開発サーバーの起動

Railsの開発サーバーを起動しますの。

```bash
bin/dev
```

サーバーが起動したら、ブラウザで `http://localhost:3000` にアクセスして、アプリケーションが正しく動作しているか確認できますわ。

## 便利なコマンド

### ジェネレーターの使用

新しいモデルやコントローラーを作成する際は、ジェネレーターを使用しますの。

```bash
# モデルの作成
rails generate model User name:string email:string

# コントローラーの作成
rails generate controller Users index show
```

### データベースの操作

```bash
# マイグレーションの作成
# カラムの追加（name: カラム名, string: データ型）
rails generate migration AddNameToUsers name:string

# インデックス付きカラムの追加（:index でインデックスを追加）
rails generate migration AddEmailToUsers email:string:index

# カラムの削除（Remove で始まるマイグレーション名）
rails generate migration RemoveNameFromUsers name:string

# 複数のカラムを一度に追加
rails generate migration AddDetailsToUsers name:string email:string:index age:integer is_active:boolean

# その他のデータ型の例
rails generate migration AddPriceToProducts price:decimal
rails generate migration AddPublishedAtToArticles published_at:datetime
rails generate migration AddIsActiveToUsers is_active:boolean

# マイグレーションの実行
rails db:migrate

# マイグレーションの取り消し
rails db:rollback

# データベースのリセット
rails db:reset
```

### テストの実行

```bash
# 全テストの実行
rspec

# 特定のテストの実行
rspec spec/models/user_spec.rb

# 特定のテストケースの実行
rspec spec/models/user_spec.rb:10
```

## 開発環境の特徴

- Ruby 3.4
- Rails 8
- PostgreSQL
- Tailwind CSS
- Docker outside of Docker (DooD) 対応
- Rubocopによるコードスタイルチェック
- RSpecによるテスト

## 注意事項

- コンテナ内でDockerコマンドを使用する場合は、ホストのDockerソケットがマウントされていることを確認してください。
- 開発中は`bin/dev`を使用して、Tailwind CSSのウォッチモードとRailsサーバーを同時に起動することをお勧めします。

何かご質問がございましたら、お気軽にお申し付けくださいませ。
