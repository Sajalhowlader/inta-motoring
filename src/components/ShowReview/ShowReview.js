import React from 'react';
import './ShowReview.css'
import { FaStar } from 'react-icons/fa';
const ShowReview = ({ reviews }) => {
    const { name, picture, review, reatting } = reviews
    return (
        <div className='feedback-info'>
            <img src={picture} alt="" />
            <p className='person-name'>{name}</p>
            <p className='review'>{review}</p>
            <strong className='reatting' >Retting: {reatting} <FaStar className='icon' /><FaStar className='icon' /><FaStar className='icon' /><FaStar className='icon' /><FaStar className='icon' /></strong>
        </div>
    );
};

export default ShowReview;