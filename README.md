## README.md

````markdown
# Laravel React Authentication System

## 概要

このプロジェクトは、Laravel 11 と React（TypeScript）を使用し、パッケージを使用せず認証システムを実装した Web アプリケーションです。
Docker（Laravel Sail）環境で動作し、2 段階認証やロールベースのアクセス制御を含む包括的な認証機能を提供します。

## 技術スタック

-   Backend: Laravel 11 (PHP 8.4)
-   Frontend: React + TypeScript + Inertia.js
-   Database: MySQL 8.0
-   Environment: Docker (Laravel Sail)

## 主な機能

1. 認証機能

    - ログイン/ログアウト
    - パスワードリセット（メール送信）
    - 2 段階認証（新規ログインまたは 1 週間以上未ログイン時）

2. 権限管理

    - Admin (レベル 1)
    - Edit (レベル 2)
    - Member (レベル 3)

3. ユーザー管理

    - 管理者専用のユーザー管理画面
    - ユーザーの新規登録（管理者のみ）
    - ユーザーの権限設定

4. 製品リスト
    - 全ユーザーがアクセス可能な製品一覧表示

## インストール手順

1. リポジトリのクローン

```bash
git clone [repository-url]
cd [project-name]
```
````

2. 環境変数の設定

```bash
cp .env.example .env
```

3. Docker コンテナの起動

```bash
composer require laravel/sail --dev
php artisan sail:install
./vendor/bin/sail up -d
```

4. 依存パッケージのインストール

```bash
./vendor/bin/sail composer install
npm install
```

5. アプリケーションキーの生成

```bash
./vendor/bin/sail artisan key:generate
```

6. データベースのマイグレーションとシーディング

```bash
./vendor/bin/sail artisan migrate --seed
```

7. フロントエンドのビルド

```bash
npm run dev
```

## 開発サーバーの起動

```bash
# バックエンド
./vendor/bin/sail up -d

# フロントエンド
npm run dev
```

## テストの実行

```bash
./vendor/bin/sail artisan test
```

## 初期管理者アカウント

-   Email: admin@example.com
-   Password: password

## ディレクトリ構成

```
.
├── app
│   ├── Http
│   │   ├── Controllers
│   │   │   ├── Auth
│   │   │   └── Admin
│   │   └── Middleware
│   ├── Models
│   └── Notifications
├── resources
│   └── js
│       ├── Components
│       ├── Layouts
│       └── Pages
└── tests
    └── Feature
        └── Auth
```

## セキュリティ機能

-   CSRF 保護
-   パスワード強度の要件設定
-   2 段階認証
-   セッション管理
-   ロールベースのアクセス制御

## 開発ガイドライン

1. コーディング規約

    - PSR-12 に準拠した PHP コード
    - ESLint に準拠した TypeScript/React コード

2. Git 運用

    - feature/ブランチでの開発
    - プルリクエストによるコードレビュー

3. テスト
    - 機能テストの作成
    - セキュリティテストの実施

## トラブルシューティング

1. コンテナの再起動

```bash
./vendor/bin/sail down
./vendor/bin/sail up -d
```

2. キャッシュのクリア

```bash
./vendor/bin/sail artisan config:clear
./vendor/bin/sail artisan cache:clear
```

3. npm の依存関係リセット

```bash
rm -rf node_modules
npm clean-install
```

