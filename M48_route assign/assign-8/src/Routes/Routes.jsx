import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Blogs from '../pages/Blogs/Blogs';
import ContactUs from '../pages/ContactUs/ContactUs';
import MyBooking from '../pages/MyBooking/MyBooking';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('doctorData.json'),
        path: "/",
        Component: Home
      },
      {
        path: '/blogs',
        Component: Blogs
      },
      {
        path: '/contactus',
        Component: ContactUs
      },
      {
        path: '/mybooking',
        loader: () => fetch('doctorData.json'),
        Component: MyBooking
      },
      {
        path: '/doctorDeatils/:id',
        loader: () => fetch('doctorData.json'),
        Component: DoctorDetails
      }


    ]
  },
]);