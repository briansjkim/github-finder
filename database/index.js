const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected'));

const repoSchema = new mongoose.Schema({
    id: Number,
    name: String,
    owner_login: String,
    owner_repos_url: String,
    owner_starred_url: String
});

const Repo = mongoose.model('Repo', repoSchema);
