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

    const handleChange = function(val) {
        setSearchedUser(val);
    }

    return (
        <div className="App">
            <div className="App-header">
                <h1>Github Finder</h1>
            </div>
            <div className="Search">
                <input
                    className="Search-user"
                    type="text"
                    value={searchedUser}
                    placeholder="Search Github User"
                    onChange={e => handleChange(e.target.value)}
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
