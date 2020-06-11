const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database/index.js');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/api/repos', (req, res) => {
    res.send('GET successful');
});

app.post('/api/repos', (req, res) => {
    // const { username } = req.body;
    // axios.get(`https://api.github.com/users/${username}/repos`)
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
