// 必要なモジュールやファイルをインポート
import './bootstrap'; // Laravelの初期化や設定ファイルをインポート
import '../css/app.css'; // アプリケーション全体で使用するCSSファイルをインポート

// React関連のモジュールをインポート
import React from 'react'; // Reactのコアライブラリをインポート
import { createRoot } from 'react-dom/client'; // React 18での新しいレンダリングAPIをインポート

// Inertia.js関連のモジュールをインポート
import { createInertiaApp } from '@inertiajs/react'; // Inertia.jsをReactで使用するためのヘルパー関数をインポート

// アプリケーションの初期ページをインポート
import Main from './Pages/Admin/Main'; // Admin/Welcomeページをインポート

// 環境変数からアプリケーション名を取得、デフォルトは "Laravel"
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Inertia.jsアプリケーションを作成
createInertiaApp({
    // ページタイトルを設定するための関数
    title: (title) => `${title} - ${appName}`, // ページタイトルを "ページタイトル - アプリ名" の形式で設定

    // ページコンポーネントを解決するための関数
    resolve: () => Main, // 最初に表示するページとして Welcome コンポーネントを指定

    // アプリケーションをセットアップするための関数
    setup({ el, App, props }) {
        // 指定したHTML要素にReactアプリケーションをマウント
        const root = createRoot(el); // React 18でのルート要素を作成
        root.render(<App {...props} />); // Reactアプリケーションをレンダリング
    },

    // ページ遷移中のプログレスバーの設定
    progress: {
        color: '#4B5563', // プログレスバーの色を設定
    },
});
