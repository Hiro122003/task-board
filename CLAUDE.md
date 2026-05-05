# CLAUDE.md

このファイルは、リポジトリ内のコードを操作する際に Claude Code (claude.ai/code) へ提供するガイダンスです。

## プロジェクト概要

タスクの追加・完了切り替え・削除ができるシンプルなタスクボードアプリ。タスクは localStorage に永続化される。

## 技術スタック

- **React 18** + **Vite 5** — UI フレームワーク／ビルドツール
- **JavaScript (JSX)** — TypeScript は使用しない
- スタイリングは CSS ファイル（CSS Modules 不使用）

## コンポーネント・命名規約

- コンポーネントファイルは `PascalCase.jsx`（例: `App.jsx`）
- CSS クラス名は BEM 記法 — `block__element--modifier`（例: `task-item__text`、`task-item--done`）
- ヘルパー関数はコンポーネント外にトップレベルで定義する（例: `loadTasks`、`nextIdFrom`）

## デプロイ先

https://hiro122003.github.io/task-board/

`main` ブランチへの push で GitHub Actions が自動ビルド＆デプロイする（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

## Git 運用ルール

コードを変更するたびに、`main` ブランチへコミットしてプッシュすること。

```powershell
git add <変更ファイル>
git commit -m "<メッセージ>"
git push origin main
```


##GitHubリポジトリ
https://github.com/Hiro122003/task-board.git