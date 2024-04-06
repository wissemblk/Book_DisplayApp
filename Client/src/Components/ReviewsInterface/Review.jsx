import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Review.css';

function Review({ review }) {
    return (
        <div className="review-body">
            <div className='user-container-img'><img src='../user.png'/></div>
            <div className='user-name'>{review.User_Name}: </div>
            <div className='review-text'>{review.bookReview}</div>
           
            <div className='stars-rated'>
              
                {typeof review.Rate === 'number' && [...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className="star"
                        color={i < review.Rate ? 'gold' : 'gray'}
                        size={20}
                    />
                ))}
            </div>
            <div className='review-date'>{new Date(review.Date).toLocaleDateString()}</div>

        </div>
    );
}

export default Review;

