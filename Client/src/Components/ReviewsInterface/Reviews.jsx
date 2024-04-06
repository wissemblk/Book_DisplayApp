import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review';
import './Review.css';


export default function Reviews({ currentUserId }) {
    const [reviews, setReviews] = useState([]);
    
    
    const getReviews = () => {
        axios.get("http://localhost:5174/api/reviews")
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    };

    useEffect(() => {
        getReviews();
    }, []); 

    return (
        <div className='Reviews'>
           
            <div className='Reviews-container'>
                {console.log(reviews)}
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <Review key={review.idReview} review={review} />
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
    
    
}
