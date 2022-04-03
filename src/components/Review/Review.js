import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewRoute from '../ReviewRoute/ReviewRoute';

const Review = () => {
    const [reviews] = useReview()
    return (
        <div>
            <h1 className='feedback-title'>Customer Feedback</h1>
            <div className='feedback-container'>
                {
                    reviews.map(review => <ReviewRoute key={review.id} reviews={review} />)
                }
            </div>
        </div>
    );
};

export default Review;