import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
})


app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact-me.html'));
})

app.listen(port, (error) => {
    if (error) throw error;

    console.log(`Server running at http://localhost:${port}`);
})
