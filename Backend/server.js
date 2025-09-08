const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const urls = {};

app.post('/shorten', (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ error: 'longUrl is required' });
    }
    const shortCode = nanoid(7);
    urls[shortCode] = longUrl;
    res.json({ shortUrl: `http://localhost:${port}/${shortCode}` });
});

app.get('/:code', (req, res) => {
    const longUrl = urls[req.params.code];
    if (longUrl) {
        return res.redirect(longUrl);
    } else {
        return res.status(404).send('URL not found');
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));