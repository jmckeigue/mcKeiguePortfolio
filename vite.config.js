import { resolve } from "path";
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
    root: './',
    base: '/',
    main: 'src/main.jsx',
    plugins: [react()]

});