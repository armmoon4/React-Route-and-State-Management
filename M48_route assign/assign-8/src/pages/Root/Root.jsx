import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Root;