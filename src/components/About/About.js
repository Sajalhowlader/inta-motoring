import React from 'react';
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'
import img5 from '../../images/img-5.jpg'
import img6 from '../../images/img-6.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <h1 className='img-title'>Boos Photo</h1>
            <div className='img-container'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </div>
    );
};

export default About;