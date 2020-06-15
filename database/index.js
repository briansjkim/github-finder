const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finder', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected'));

const repoSchema = new mongoose.Schema({
    id: Number,
    name: String,
    owner_login: String,
    owner_repos_url: String,
    stargazers_count: Number
});

const Repo = mongoose.model('Repo', repoSchema);

module.exports = {
    saveRepo: function(repo) {
        let newRepo = new Repo({
            id: repo.id,
            name: repo.name,
            owner_login: repo.owner.login,
            owner_repos_url: repo.owner.url,
            stargarzers_count: repo.stargazers_count
        });

        newRepo.save((err, result) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Success');
            }
        })
    },

    getRepos: function (req, res) {
        Repo.find({}, (err, result) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                res.send(result);
            }
        })
    }
};
