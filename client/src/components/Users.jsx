import React from 'react';
import styles from './App.css';

const Users = ({ repo }) => {
    return (
        <div className={styles.repo}>
            <h1>{repo.owner_login}</h1>
            <h3><a target="_blank" href={repo.repos_url}>{repo.name}</a></h3>
        </div>
    )
}

export default Users;
