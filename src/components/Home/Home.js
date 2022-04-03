import React from 'react';
import carImg from '../../images/car.png'
import './Home.css'
const Home = () => {
    return (
        <div className='product-container'>
            <div className="product-info">
                <p className='product-title'>Make Your day < br /><span>with Insta</span></p>
                <p>Welcome to Insta Motoring Family.Here you can buy New and Recondition Cars.We will provide you 12 month free servicing after buy a cur. Thank You</p>
                <button className='info-btn'>Explore More</button>
            </div>
            <div className='product-img'>
                <img src={carImg} alt="" />
            </div>
        </div>
    );
};

export default Home;