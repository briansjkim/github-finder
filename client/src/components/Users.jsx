import React from 'react';
import styles from './App.css';

const Users = ({ repo }) => {
    return (
        <div className={styles.repo}>
            <p>{repo.owner_login}</p>
            <p>{repo.name}</p>
            <p>{repo.repos_url}</p>
        </div>
    )
}

export default Users;
