# つむぎ行政書士事務所 LP

個人事業主・フリーランス・小規模事業者向けの「契約書相談」をテーマにした、ポートフォリオ掲載用の架空LPプロジェクトです。

## プロジェクト概要

- 制作区分：自主制作／架空サイト
- サイト種別：1ページ完結型LP
- 事務所名：つむぎ行政書士事務所
- サービス：個人事業主のための契約書相談
- 最終コンバージョン：30分無料相談の予約
- 実装予定：HTML / CSS / JavaScript
- 制作方針：モバイルファースト
- SP基準幅：375px
- 現在のフェーズ：企画・素材制作・素材整理・Markdown正本化
- 実装状態：未開始
- 公開状態：未公開

このサイトは架空の行政書士事務所を題材にしています。実在する事務所・人物・地域とは関係ありません。

## 最初に読む順番

1. `README.md` — プロジェクト全体の案内
2. `00_PROJECT_BRIEF.md` — 企画・構成・サイトテキストの正本
3. `02_WORK_RULES.md` — 制作中に守るルール
4. `DESIGN_RULES.md` — ブランド・デザインの正本
5. `IMAGE_ASSETS.md` — 正式画像素材の台帳
6. `01_REFERENCE_NOTES.md` — 参考サイトから学ぶ考え方
7. `03_DECISIONS_LOG.md` — 決定理由と変更履歴

## Markdownファイルの役割

- `00_PROJECT_BRIEF.md`
  - LPの基本情報、ターゲット、サービス、CV、13セクション構成、サイト内テキストを管理
- `01_REFERENCE_NOTES.md`
  - 参考サイトから取り入れる考え方と、本LP向けの翻訳方針を管理
- `02_WORK_RULES.md`
  - 実装、素材、Markdown、Gitに関する作業ルールを管理
- `03_DECISIONS_LOG.md`
  - 決定事項、方針変更の理由、制作履歴を管理
- `DESIGN_RULES.md`
  - 配色、写真、アイコン、余白、レイアウト、動き等のデザインルールを管理
- `IMAGE_ASSETS.md`
  - 正式採用画像のファイル名、用途、alt方向、状態、格納場所を管理
- `HANDOFF.md`
  - 未作成。実装・デザインの引き継ぎが必要になった段階で作成予定

## フォルダ構成

```text
tsumugi_lp_project/
├── 00_PROJECT_BRIEF.md
├── 01_REFERENCE_NOTES.md
├── 02_WORK_RULES.md
├── 03_DECISIONS_LOG.md
├── DESIGN_RULES.md
├── IMAGE_ASSETS.md
├── README.md
├── assets/
│   └── images/
│       ├── logo/
│       ├── photos/
│       │   ├── hero/
│       │   ├── about/
│       │   ├── office/
│       │   └── contract/
│       ├── icons/
│       │   ├── flow/
│       │   ├── check-points/
│       │   ├── reasons/
│       │   ├── contract-status/
│       │   └── ui/
│       └── _drafts/
├── design/
│   └── pencil/                     （過去の構成・今回は未使用）
├── references/
├── css/
└── js/
```

## 画像素材

- 正式採用済み：26点
  - ロゴ：1点
  - 写真：6点
  - FLOW：5点
  - 契約書で確認したいポイント：7点
  - 選ばれる理由：5点
  - 契約書がある方／ない方：2点
- 正式素材の詳細：`IMAGE_ASSETS.md`
- `_drafts`：正式採用前・比較用・不採用素材。Git管理対象外

## Git

- Git管理：あり
- ブランチ：`main`
- GitHub：https://github.com/Coconattsu0723/tsumugi-lp
- 初回commit・push：完了
- 正式画像素材のcommit・push：完了
- 現在のMarkdown更新：未commit

commit・pushは、ユーザーの明示的な指示がある場合のみ行います。

## 次の工程候補

1. 未決事項を確認する
2. `00_PROJECT_BRIEF.md` の13セクションとテキストを確認する
3. Markdownと正式画像素材を正本として、Codexから375px基準のモバイルファースト実装を開始する
4. 実際のブラウザで375px・390pxの表示を確認し、余白・文字・写真・UIのデザイン値を調整・確定する
5. 768pxで中間幅を確認する
6. 1024px以上のPC差分を実装し、1366px・1440pxで確認する

Pencilは使用しません。現時点ではHTML / CSS / JavaScriptの実装は開始していません。
