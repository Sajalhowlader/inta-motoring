import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='header-container'>
                <h1>Insta Motoring</h1>
                <ul >
                    <NavLink className={({ isActive }) => isActive ? "active-link " : "link"} to='/Home'>HOME</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link " : "link"} to='/Review'>REVIEW</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link " : "link"} to='/Dashboard'>DASHBOARD</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link " : "link"} to='/Blogs'>BLOGS</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link " : "link"} to='/About'>ABOUT</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Header;