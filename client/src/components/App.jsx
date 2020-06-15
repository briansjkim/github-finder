import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [searchedUser, setSearchedUser] = useState('');

    useEffect(() => {
        axios.get('/api/repos')
            .then(res => setRepos(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <div className="App-header">
                <h1>Github Finder</h1>
            </div>
            <div className="Search">
                <input
                    className="Search-user"
                    type="text"
                    placeholder="Search Github User"
                />
                <input
                    className="Search-submit"
                    type="submit"
                />
            </div>
        </div>
    )
}

export default App;
