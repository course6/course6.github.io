# Repository Guidelines

## プロジェクト構成

ネット進学のサイトは Angular 16、TypeScript、SCSS で構成されています。ページ固有の変更は `src/app/pages/` の該当機能にまとめ、複数ページで使う部品は `src/app/components/` に置いてください。ルートの定義は `src/app/app-routing.module.ts` と各機能の `*-routing.module.ts` で確認できます。

全体のスタイルは `src/styles.scss`、ページ固有のスタイルは各コンポーネントの SCSS で管理します。画像は `src/assets/image/`、配布用 PDF は `src/assets/pdf/` に置いてください。

## 開発とビルド

`.node-version` で指定された Node.js 18.17.1 を使い、リポジトリのルートで実行します。

- `npm ci` はロックファイルに従って依存パッケージをインストールします。
- `npm start` は開発サーバーを起動します。`http://localhost:4200/` で変更を確認できます。
- `npm run build` は本番用ファイルを `dist/` に生成します。
- `npm run watch` はファイルの変更時に開発用ビルドを再実行します。

## コードスタイルと命名

`.editorconfig` に従い、UTF-8、スペース 2 個のインデント、末尾改行を使用します。TypeScript の文字列はシングルクォートで囲んでください。コンポーネント名には `service-page` のようなケバブケースを使い、同じディレクトリに `service-page.component.ts`、対応する HTML、SCSS をまとめます。Prettier は開発依存に含まれています。

## テスト

Jasmine のテストは対象ファイルの隣に `*.spec.ts` として置きます。たとえばサービス紹介ページの表示を変更した場合は `service-page.component.spec.ts` に期待する表示の検証を追加します。

- `npm test` は Karma で Chrome を起動し、変更のたびにテストを実行します。
- `npm test -- --watch=false --browsers=ChromeHeadless --code-coverage` はテストを一度実行し、カバレッジを集計します。最低カバレッジ率の設定はありません。

## コミットとプルリクエスト

履歴に合わせ、新機能には `feat:`、修正には `fix:`、保守作業には `chore:` を付け、変更対象を短く記します。例は `fix: 合格実績ページのスマートフォン用画像を修正` です。

PR 本文には変更したページ、変更理由、実行した確認手順を記載してください。関連 Issue があればリンクし、見た目を変更した場合は対象画面幅のスクリーンショットを添えるとレビューしやすくなります。

## エージェント向けの指示

回答は日本語で行ってください。GitHub の PR 情報を取得する際は `gh` を使ってください（例：`gh pr view 24`）。
