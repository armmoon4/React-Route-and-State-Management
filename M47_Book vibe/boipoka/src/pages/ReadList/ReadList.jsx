import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWish } from '../../utility/addToDb';
import Book from '../Book/Book';
const ReadList = () => {
    //worst case

    const [readWishList , setReadWishList] = useState([]);
    const [readList, setReadlist] = useState([]);
    const [sort, setSort] = useState('');


    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData); 
        const storedWhishlist = getStoredWish()
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const convertedWishedBook = storedWhishlist.map(id => parseInt(id))
        // console.log(convertedStoredBook)
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        const myWishList = data.filter(book => convertedWishedBook.includes(book.bookId));
        setReadWishList(myWishList);
        setReadlist(myReadList);

    }, [])


    const handleSort = (type) => {
        setSort(type)
        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadlist(sortedByPage)
        }
        if (type === "ratings") {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating)
            setReadlist(sortedByRating)
        }
    }

    // wishlist ...


    return (
        <div className='items-center text-center'>
            <details className="dropdown">
                <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('pages')}>pages</a></li>
                    <li><a onClick={() => handleSort('ratings')}>ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>BookList</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>book i read {readList.length}</h2>
                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        readWishList.map(w => <Book key={w.bookId} singleBook={w}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;