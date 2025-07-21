# Streamlit

Streamlitを使用して、機械学習やAIを使用したアプリを開発するための環境を提供します。

## 🚀 Streamlitとは？

[Streamlit](https://streamlit.io) は、**Pythonで美しいWebアプリを高速に開発できるフレームワーク**です。データサイエンスや機械学習の可視化はもちろん、最近ではチャットUIやRAGベースのアプリケーション開発にも活用されています。

### 🔧 開発者体験の特徴

- 🧠 **バックエンドコードだけでUIが作れる**  
  フロントエンド（HTML/CSS/JS）の知識不要。「入力欄の内容」や「ボタンの押下状態」を使って、
  バックエンドでやりたい処理を書くだけ。実際のコントロールの配置は`Streamlit`が勝手にやってくれます。

- ⚡ **超高速プロトタイピング**  
  `streamlit run app.py` だけで即実行＆即反映。コードを保存するたびにWeb UIが自動更新されます。

- 🗃️ **セッション管理・状態保存がシンプル**  
  `st.session_state` を使うことでチャット履歴や入力値の保持も簡単。

- 🔌 **データ処理と連携が容易**  
  連携ユーティリティが豊富で、`pandas`, `numpy`, `matplotlib`, `plotly`, `transformers`, `OpenAI`, `Gemini`などと相性抜群。

- 🧪 **開発と本番のギャップが小さい**  
  小規模なツールから商用レベルのアプリまで、スケールしながら拡張可能。

### 💡 利用例

- AIチャットボット
- RAGベース検索アプリ
- データ可視化ダッシュボード
- APIレスポンスビューア
- 社内ツールの即席UI化

### 🧮 サンプルコード：シンプルな足し算アプリ

```python
# add_app.py
import streamlit as st

st.title("🧮 かんたん足し算アプリ")

# ユーザーの入力
a = st.number_input("1つ目の数字", value=0)
b = st.number_input("2つ目の数字", value=0)

# ボタンで結果表示
if st.button("計算する"):
    result = a + b
    st.success(f"結果: {a} + {b} = {result}")
```

## 利用方法

1. プロジェクトの初期化
```bash
streamlit init 
```
場所を指定する場合：
```bash
streamlit init hello-app
```

2. アプリケーションの実行
```bash
streamlit run streamlit_app.py
```
- アプリケーションは http://localhost:8501 で確認できます

## プリインストールされているモジュール
Dockerfile 参照

## 便利なエイリアス

- `st` - streamlitコマンドのエイリアスです。例えば `st run app.py` のように使用できます。


## 参考資料

- [Streamlit Documentation](https://docs.streamlit.io/)
- [Streamlit Gallery](https://streamlit.io/gallery)
- [Streamlit Components](https://streamlit.io/components)
