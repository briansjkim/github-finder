import React from 'react';
import styles from '../css/App.css';

const Users = ({ repo }) => {
    return (
        <div className={styles.repo}>
            <h1>{repo.owner_login}</h1>
            <h3>Github Link: <a target="_blank" href={repo.repos_url}>{repo.name}</a></h3>
        </div>
    )
}

export default Users;
