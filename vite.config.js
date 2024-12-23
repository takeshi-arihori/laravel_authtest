import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel(["resources/ts/app.tsx", "resources/css/app.css"]),
        react(),
    ],
});
