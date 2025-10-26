import React from 'react';
import { useLoaderData } from 'react-router';
import Use from '../Use/Use';

const User = () => {
    const users = useLoaderData(); 
    console.log(users);
    return (
        <div>
            <h2>This is user c</h2>
            {
                users.map(users => <Use key={users.id} users={users} ></Use>)
            }
        </div>
    );
};

export default User;