import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import carImg from '../../images/car.png'
import ShowReview from '../ShowReview/ShowReview';
import './Home.css'
const Home = () => {
    const [reviews,] = useReview()
    const newreview = reviews.slice(0, 3)
    const navigate = useNavigate()
    return (
        <div>
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

            <div className='feedback'>
                <div className='feedback-parents'>
                    <h1 className='feedback-title'>Customer Feedback</h1>
                    <div className='feedback-container'>
                        {
                            newreview.map(review => <ShowReview key={review.id} reviews={review} />)
                        }
                    </div>
                    <button onClick={() => navigate('/Review')} className='info-btn re-info-btn'  >See All Feedbacks <FaArrowRight /> </button >
                </div>
            </div>

        </div>
    );
};

export default Home;