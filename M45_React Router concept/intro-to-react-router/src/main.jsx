import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobile from './components/Mobile/Mobile.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import User from './components/User/User.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'mobile' , Component: Mobile},
      {path: 'laptop' , Component: Laptops},
      {path:'user' , 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component:User
      },

      {
        path: 'user2',
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Users2 userPromise={userPromise}>

          </Users2>
        </Suspense>
      },

      {

        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails

      },

      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      }, 

      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }

    ]
  },
  {
    path:'about',
    element: <h3>about me here sss</h3>
  },
  {
    path: 'app',
    element: <App></App>
  },

      {
        path: '*',
        element: <h3>Not FOUND: 404 STATUS</h3>
      }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
