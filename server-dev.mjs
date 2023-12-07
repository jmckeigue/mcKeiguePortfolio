import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';

const app = express();
const port = process.env.PORT || 3000;

const comments = [
    {
        name: 'Cole Finely',
        description: 'Your page looks amazing!',
    },
    {
        name: 'Prof Skiadas',
        description: 'Your use of JS and JSX is awesome!',
    },
    {
        name: 'Will Slover',
        description: 'Most trustworthy website!',
    },
];

const vite = await createServer({
    server: {
        middlewareMode: true,
    },
    appType: 'custom',
});

app.get('/api/comments', (req, res) => {
    res.json(comments);
});

app.use(vite.middlewares);

app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
        const template = await vite.transformIndexHtml(url, fs.readFileSync('./public/index.html', 'utf-8'));
        const { render } = await vite.ssrLoadModule('./src/entry-server.jsx');
        const { getServerData } = await vite.ssrLoadModule('./server/function.mjs');
        const data = await getServerData();
        const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;

        const html = template.replace(`<!--app-html-->`, `${render(data)} ${script}`);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
        res.status(500).end(JSON.stringify(error));
    }
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});