import React, { use } from 'react';

const Users2 = ({userPromise}) => {

    const users2 = use(userPromise);
    console.log('user 2 suspense data load ' , users2);

    return (
        <div>
            <h2>this is user 2</h2>
        </div>
    );
};

export default Users2;