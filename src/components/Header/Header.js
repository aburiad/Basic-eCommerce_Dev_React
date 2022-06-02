import React from 'react';
import './Header.css'
import logo from '../../logo.svg.png'
import Nav from '../Navbar/Nav';
const Header = () => {
    return ( 
        <div className='header'>
            <div className="logo">
                <img src={logo}/>
            </div>
            <Nav></Nav>
        </div>
    );
};

export default Header;