import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
 
const app = express();
const port = process.env.PORT || 8080;
 
app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '/'), { index: false }));
 
app.use('*', async (_, res) => {
  try {
    const template = fs.readFileSync('./public/index.html', 'utf-8');
    const { render } = await import('./src/entry-server.jsx');

    const { getServerData } = await import('./server/function.mjs');
    const data = await getServerData();
    const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;
 
    const html = template.replace(`<!--app-html-->`, `${render(data)} ${script}`);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    res.status(500).end(error);
  }
}); 
 
app.listen(port, () => {
  try {
    console.log(`Server is running on port http://localhost:${port}`);
  } catch (error) {
    console.error('Error starting server:', error);
  }
});