import React from 'react';

const Users = ({ repo }) => {
    return (
        <div className="Repo">
            <p>{repo.owner_login}</p>
            <p>{repo.name}</p>
            <p>{repo.repos_url}</p>
        </div>
    )
}

export default Users;
