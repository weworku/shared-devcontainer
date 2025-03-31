# Zenn CLI

Zenn CLIを使用して記事の執筆・プレビュー・公開を行うための開発環境を提供します。

## 利用方法

1. Dev Containerを起動
2. 記事のプレビュー
   ```bash
   zenn preview
   ```
   - プレビューは http://localhost:8000 で確認できます

3. 新規記事の作成
   ```bash
   zenn new:article
   ```

## 便利なエイリアス

以下のエイリアスが利用可能です：
- `zenn-preview`: `zenn preview`のエイリアス
- `zenn-new`: `zenn new:article`のエイリアス

## GitHub連携

1. Zennのアカウント設定でGitHub連携を有効化
2. リポジトリの設定でZennとの連携を有効化
3. 記事をコミットしてプッシュすると、自動的にZennに公開されます

## 参考資料

- [Zenn CLI の使い方](https://zenn.dev/zenn/articles/zenn-cli-guide)
- [GitHub リポジトリと接続して投稿する](https://zenn.dev/zenn/articles/connect-to-github)
- [Zenn CLI のインストール](https://zenn.dev/zenn/articles/install-zenn-cli) 
