import React from 'react';
import './ShowReview.css'
const ShowReview = ({ reviews }) => {
    console.log(reviews)
    const { name, picture, review, reatting } = reviews
    return (
        <div className='feedback-info'>
            <img src={picture} alt="" />
            <p className='person-name'>{name}</p>
            <p>{review}</p>
            <strong>{reatting}</strong>
        </div>
    );
};

export default ShowReview;