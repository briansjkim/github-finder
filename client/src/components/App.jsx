import React, { useState, useEffect } from 'react';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [introData, setIntro] = useState('');

    useEffect(() => {
        setIntro('Hello There');
    })

    return (
        <div>
            <p>{introData}</p>
        </div>
    )
}

export default App;
