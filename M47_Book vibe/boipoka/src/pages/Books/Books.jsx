import React, { Suspense } from 'react';
import Book from '../Book/Book';


const Books = ({ data }) => {

    // const [allbooks , setAllBooks] = useState([]); 

    // useEffect(()=> {
    //     fetch('booksData.json')
    //     .then(res => res.json()
    //     .then(data => {
    //        setAllBooks(data);
    //     })
    // )
    // } ,[])

    // const bookPromise=fetch('./booksData.json').then(res => res.json())


    return (
        <div className='text-3xl text-center p-6'>
            <h1>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};
// 47-3   done 9
export default Books;