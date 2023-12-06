import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main:(__dirname, 'public/index.html')
            },
        },
    },
    resolve: {
        alias: {
            '/@/': path.resolve(__dirname, 'src/'),
        },
        extenstions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    root: './',
    base: '/',
    main: '/src/main.jsx',
    plugins: [react()]

});