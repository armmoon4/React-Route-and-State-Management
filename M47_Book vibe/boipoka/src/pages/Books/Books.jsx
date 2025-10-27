import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allbooks , setAllBooks] = useState([]); 

    useEffect(()=> {
        fetch('booksData.json')
        .then(res => res.json()
        .then(data => {
           setAllBooks(data);
        })
    )
    } ,[])
    return (
        <div>
            <h2>helllo i am books</h2>
        </div>
    );
};
// 47-3   done 9
export default Books;