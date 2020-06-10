const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();

app.get('/api/repos', (req, res) => {
    res.send('GET successful');
});

app.post('/api/repos', (req, res) => {
    res.send('POST successful');
})


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
