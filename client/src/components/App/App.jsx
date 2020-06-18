import React, { useState, useEffect } from 'react';
import Users from '../Users/Users.jsx';
import Copyright from '../Copyright/Copyright.jsx';
import axios from 'axios';
import styles from './App.css';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [searchedUser, setSearchedUser] = useState('');

    const retrieveRepos = function() {
        axios.get('/api/repos')
            .then(res => setRepos(res.data))
            .catch(err => { throw err; });
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
            .catch((err) => { throw err;} )
    };

    return (
        <div id="main" className={styles.app}>
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
            <div>
                <a href="#main" className={styles.back}>Back To Top</a>
            </div>
            <Copyright />
        </div>
    )
}

export default App;
