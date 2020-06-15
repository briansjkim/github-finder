import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [repos, setRepos] = useState([]);

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
            <div className="App-body">
                <p>Hello</p>
            </div>
        </div>
    )
}

export default App;
