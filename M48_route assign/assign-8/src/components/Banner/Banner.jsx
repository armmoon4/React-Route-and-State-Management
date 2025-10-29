import React from 'react';
import BannerImg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='mt-5 px-4 text-center items-center'>
            <h1 className='text-2xl sm:text-3xl font-bold'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className='max-w-2xl mx-auto mt-2'>
                <small>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</small>
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center mt-4 gap-4'>
                <input
                    className='rounded-2xl w-2xl sm:w-72 h-10 px-4 border border-gray-300'
                    type="text"
                    placeholder='Search any Doctor'
                />
                <a className="btn rounded-3xl bg-blue-600 text-white px-6 py-2 w-full sm:w-auto cursor-pointer">
                    Search Now
                </a>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center mt-5 gap-4'>
                <img className='w-full max-w-sm lg:w-[420px] rounded-lg' src={BannerImg} alt="Doctor" />
                <img className='w-full max-w-sm lg:w-[420px] rounded-lg' src={BannerImg} alt="Doctor" />
            </div>
        </div>
    );
};

export default Banner;