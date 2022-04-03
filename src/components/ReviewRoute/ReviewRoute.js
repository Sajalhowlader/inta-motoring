import React from 'react';

const ReviewRoute = ({ reviews }) => {
    const { picture, name, review, reatting } = reviews
    return (
        <div className='feedback-info'>
            <img src={picture} alt="" />
            <p className='person-name'>{name}</p>
            <p>{review}</p>
            <strong>{reatting}</strong>
        </div>
    );
};

export default ReviewRoute;