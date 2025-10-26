import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const Use = ({users}) => {

    const [showInfo , setShowInfo] = useState(false);

    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${users.id}`)
                            .then(res=> res.json())

    return (
        <div style={userStyle}>
            
         <h3>{users.name}</h3>
         <p>Email: {users.email}</p>
         <p><small>Phone: {users.phone}</small></p>
         <Link to={`/users/${users.id}`}>Show Details</Link>   
         <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? 'Hide ' : 'Show '}info</button>
         {
            showInfo && <Suspense fallback={<span>loading...</span>}> 
                <UserDetails2 userPromise={userPromise}></UserDetails2>
            </Suspense>
         }
        </div>
    );
};

export default Use;