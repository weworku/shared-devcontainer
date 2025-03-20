# Rustで最初のアプリをビルド・実行する手順

## 1. プロジェクトの作成
新しいプロジェクトを作成します。

```bash
cargo new hello_world
cd hello_world
```

## 2. コードの編集
`src/main.rs`を開き、以下のコードが含まれていることを確認します。

```rust
fn main() {
    println!("Hello, world!");
}
```

## 3. アプリのビルド
以下のコマンドでアプリをビルドします。

```bash
cargo build
```

ビルドが成功すると、`target/debug/hello_world`という実行ファイルが生成されます。

## 4. アプリの実行
以下のコマンドでアプリを実行します。

```bash
cargo run
```

実行結果として、`Hello, world!`が表示されます。

## 5. リリースビルド（オプション）
最適化されたリリースビルドを作成するには、以下のコマンドを使用します。

```bash
cargo build --release
```

生成された実行ファイルは`target/release/hello_world`に配置されます。

以上で、Rustの最初のアプリをビルド・実行する手順は完了です。
