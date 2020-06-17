const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database/index.js');
const config = require('../config/config.js');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/api/repos', (req, res) => {
    db.getRepos(req, res);
});

app.post('/api/repos', (req, res) => {
    const { username } = req.body;
    axios.get(`https://api.github.com/users/${username}/repos`, {
        'Authorization': `token ${config.TOKEN}`
    })
    .then((result) => {
        return result.data;
    })
    .then((data) => {
        data.forEach(repo => db.saveRepo(repo));
    })
    .catch((error) => console.log(error));
    res.status(201).send('Successful');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
