import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/stuff", (req, res) => {
    return res.json({ a:2 })
})

app.listen(3000, () => {
    console.log(`Live on http://localhost:3000`);
});