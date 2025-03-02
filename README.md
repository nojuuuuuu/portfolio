# ポートフォリオサイト

GitHub Pagesで公開するためのシンプルで洗練されたポートフォリオサイトです。

## 機能

- レスポンシブデザイン
- ダークモード対応
- アニメーション効果
- お問い合わせフォーム
- プロジェクト詳細ページ

## 技術スタック

- Next.js
- TypeScript
- Tailwind CSS
- React Icons
- React Hook Form

## 使い方

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認できます。

### ビルド

```bash
npm run build
```

### GitHub Pagesへのデプロイ

```bash
npm run deploy
```

## カスタマイズ方法

### プロフィール情報の編集

`components/Hero.tsx` と `components/About.tsx` ファイルを編集して、自分の情報に更新してください。

### プロジェクトの追加

`components/Projects.tsx` ファイルの `projectsData` 配列に新しいプロジェクトを追加できます。また、詳細ページのデータは `pages/projects/[id].tsx` ファイルの `projectsData` 配列に追加してください。

### スキルの編集

`components/Skills.tsx` ファイルの `skillsData` 配列を編集して、自分のスキルを追加または削除できます。

### お問い合わせ情報の更新

`components/Contact.tsx` ファイルを編集して、自分の連絡先情報を更新してください。

## ライセンス

MIT

## 作者

nojuuu 