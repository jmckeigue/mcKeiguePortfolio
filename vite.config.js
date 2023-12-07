import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
    build: {
        rollupOptions: {
            input: {
                main:(__dirname, '/src/main.jsx')
            },
        },
        outDir: 'build-output',
        assetsDir: 'src',
    },
    resolve: {
        alias: {
            '/@/': path.resolve(__dirname, '/src/'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },

    base: '/',
    main: '/src/main.jsx',
    plugins: [react()]

});