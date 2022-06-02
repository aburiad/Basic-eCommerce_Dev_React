import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">Product</NavLink></li>
                    <li><NavLink to="/Shop">Shop</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;