import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB, addToWishDB } from '../../utility/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    console.log(singleBook)
    const { bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook || {};


    const handleMarkAsRead = id => {
        //store with id
        //where to store
        //array or collection
        //if book alreayd exist the show a alert
        //if book not exist then push in the collection or array
        addToStoredDB(id);

        Swal.fire({
            title: "Good job!",
            text: "Added to Readlist",
            icon: "success"
        });
    }

    const handleWishList = id => {
        addToWishDB(id);

        Swal.fire({
            title: "Good job!",
            text: "Added to Wishlist",
            icon: "success"
        });
    }



    return (
        <div className='w-full max-w-4xl mx-auto p-4'>
            <div className="shadow-lg rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">

                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img
                        className='w-48 md:w-60 lg:w-72 rounded-lg shadow-md object-cover'
                        src={image}
                        alt="Book Cover"
                    />
                </div>
                <div className="flex-1 flex flex-col">
                    <h2 className="text-3xl lg:text-4xl font-bold">{bookName}</h2>
                    <p className="text-lg mt-1">By : {author}</p>
                    <p className="text-md font-medium mt-2">{category}</p>
                    <p className="mt-4 text-base leading-relaxed">
                        <strong className="font-semibold">Review :</strong> {review}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tags[0]}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tags[1]}
                        </span>
                    </div>

                    <hr className="my-5 border-gray-200" />
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <strong className="font-medium">Number of Pages:</strong>
                        <span className="">{totalPages}</span>

                        <strong className="font-medium">Publisher:</strong>
                        <span className="">{publisher}</span>

                        <strong className="font-medium">Year of Publishing:</strong>
                        <span className="">{yearOfPublishing}</span>

                        <strong className="font-medium">Rating:</strong>
                        <span className="">{rating}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6 pt-2">
                        <button onClick={() => handleMarkAsRead(id)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-7 rounded-md transition duration-200">
                            Read
                        </button>
                        <button onClick={() => handleWishList(id)} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-7 rounded-md transition duration-200">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;