import React from 'react';
import styles from './App.css';

const Users = ({ repo }) => {
    return (
        <div className={styles.repo}>
            <h1>{repo.owner_login}</h1>
            <h3><a href={repo.repos_url}>{repo.name}</a></h3>
            {/* <p>Github Link: <a src="">{repo.repos_url}</a></p> */}
        </div>
    )
}

export default Users;
