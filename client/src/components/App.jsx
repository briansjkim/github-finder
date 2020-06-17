import React, { useState, useEffect } from 'react';
import Users from './Users.jsx';
import axios from 'axios';
import styles from './App.css';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [searchedUser, setSearchedUser] = useState('');

    const retrieveRepos = function() {
        axios.get('/api/repos')
            .then(res => setRepos(res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        retrieveRepos();
    }, [repos]);

    const handleChange = (val) => {
        setSearchedUser(val);
    };

    const submitSearch = function(e) {
        e.preventDefault();
        setSearchedUser('');
        axios.post('/api/repos', { username: searchedUser} )
            .then(() => retrieveRepos())
            .catch((err) => console.log(err))
    };

    return (
        <div className={styles.app}>
            <div className={styles.app_header}>
                <h1>Github Finder</h1>
            </div>
            <div className={styles.search}>
                <input
                    className={styles.search_user}
                    type="text"
                    value={searchedUser}
                    placeholder="Search Github User"
                    onChange={e => handleChange(e.target.value)}
                />
                <input
                    className={styles.search_submit}
                    type="submit"
                    onClick={e => submitSearch(e)}
                />
            </div>
            <div className={styles.repo_users}>
                {repos.map((repo, idx) =>
                    <Users repo={repo} key={idx} />
                )}
            </div>
        </div>
    )
}

export default App;
