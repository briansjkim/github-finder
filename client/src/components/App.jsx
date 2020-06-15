import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [introData, setIntro] = useState('');

    useEffect(() => {
        axios.get('/api/repos')
            .then(res => setRepos(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>{introData}</p>
        </div>
    )
}

export default App;
