import React, { useState, useEffect } from 'react';
import Users from './Users.jsx';
import axios from 'axios';
import styles from './App.css';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [noResults, setNoResults ] = useState(false);
    const [searchedUser, setSearchedUser] = useState('');

    const retrieveRepos = function() {
        axios.get('/api/repos')
            .then(res => setRepos(res.data))
            .catch(err => console.log(err));
    };
    
    // const callAPI = async () => {
    //     try {
    //         const repos = await axios.get('/api/repos');
    //         console.log(repos);
    //         // const retrievedRepos = await repos.json();
    //         // console.log(retrievedRepos);
    //         // return retrievedRepos;
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        retrieveRepos();
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const resRepos = await callAPI();
    //             setRepos(resRepos);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    const handleChange = (val) => {
        setSearchedUser(val);
    };

    const submitSearch = function() {
        setSearchedUser('');
        axios.post('/api/repos', { username: searchedUser} )
            .then(() => retrieveRepos())
            .catch((err) => console.log(err))
    };

    // const submitSearch = async () => {
    //     try {
    //         axios.post('/api/repos', { username: searchedUser})
    //         setSearchedUser('');
    //     } catch(error) {
    //         console.log(error);
    //     }
    // };

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
                    onClick={submitSearch}
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
