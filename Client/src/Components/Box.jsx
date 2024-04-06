
import Favorite from "./Fav";
import FormReview from "./FormReview";
import RateReview from "./RatingReview";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


/*this is for the book info part*/


function Box(){
    const [bookInfo,setBookInfos] = useState([]);

    const getBook = () => {
        axios.get("http://localhost:5174/api/bookInfos")
            .then(response => {
                setBookInfos(response.data);
            })
            .catch(error => {
                console.error('Error fetching book infos:', error);
            });
    };
    
    useEffect(() => {
        getBook();
    }, []); 
    
    return(
        <>
        <div className="Box">
            
            <div className="bookSection">

           <div><Favorite/></div>
            

            <img src="/cobaltred.jpg" alt="book Image" />
            
            <a href="/" alt="Link to available shop" className="bookLink">Shop Link</a>

            </div>
            <div className="bookInfo">
                
               <div className="authorIMG"><img src="/cobaltredAuthor.jpg" alt="Author image"/></div>
                
                <ul>
                    <li > <h2>{ bookInfo?.title}</h2></li>
                    <li ><h4>{bookInfo.AuthorName}</h4></li>

                </ul>
            <div className="BookDes">
                <h4 >Book Description :</h4>
                <p className="description">{bookInfo.Book_Description}</p>
                </div>

            </div>
           
            
            <div className="reviews-form">
            <h3 >Rate:</h3>
            <RateReview currentIdUser={12}/> 
            
            
            </div>
        </div>
        </>
    );
}

export default Box;