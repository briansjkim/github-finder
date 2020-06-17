const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finder', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected'));

const repoSchema = new mongoose.Schema({
    id: Number,
    name: String,
    repos_url: String,
    owner_login: String,
    stargazers_count: Number
});

const Repo = mongoose.model('Repo', repoSchema);

module.exports = {
    saveRepo: function(repo) {
        let newRepo = new Repo({
            id: repo.id,
            name: repo.name,
            repos_url: repo.html_url,
            owner_login: repo.owner.login,
            watchers_count: repo.watchers_count
        });

        newRepo.save((err, result) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log(result);
            }
        })
    },

    getRepos: function (req, res) {
        Repo.find({}, (err, result) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                // console.log(result);
                res.send(result);
            }
        }).limit(25).sort( { watchers_count: -1 });
    }
};
