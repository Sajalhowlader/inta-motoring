import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='header-container'>
                <h1>Insta Motoring</h1>
                <ul className='items-container'>
                    <Link to='/Home'>HOME</Link>
                    <Link to='/Review'>REVIEW</Link>
                    <Link to='/Dashboard'>DASHBOARD</Link>
                    <Link to='/Blogs'>BLOGS</Link>
                    <Link to='/About'>ABOUT</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;