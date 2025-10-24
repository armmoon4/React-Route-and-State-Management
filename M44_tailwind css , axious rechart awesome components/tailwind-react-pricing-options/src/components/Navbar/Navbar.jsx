import React from 'react';
import Link from './Link';
// import { Menu } from 'lucide';
const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    return (
        <nav className='flex justify-between mx-10'> 
            {/* <Menu></Menu> */}
            <h3>My Navbar</h3>
            <ul className='flex'>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex'>
            {
                navLinks.map(route =>  <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
            }
        </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Blogs</a></li>
            </ul> */}
<button>Sign in</button>
        </nav>
    );
};

export default Navbar;