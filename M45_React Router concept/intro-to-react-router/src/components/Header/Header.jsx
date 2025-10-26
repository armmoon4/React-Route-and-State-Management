import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/user2">User2</NavLink>
                <NavLink to="/posts">Post</NavLink>
            </nav>
        </div>
    );
};

export default Header;