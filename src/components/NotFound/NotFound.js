import React from 'react';
import FourImg from '../../images/404.webp'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found' >
            <img src={FourImg} alt="" />
        </div>
    );
};

export default NotFound;