
import Favorite from "./Fav";
import FormReview from "./FormReview";
import RateReview from "./RatingReview";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


/*this is for the book info part*/


function Box({indexe}){
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
        {bookInfo.map((book,indexe)=>(
                    <div key={indexe}>
            <div className="bookSection">

           <div><Favorite id={1} userId={12} /></div>
            

            <img src={book.Book_img} alt="book Image" />
            
            <a href={book.Shop_link} target="_blank" alt="Link to available shop" className="bookLink">Shop Link</a>

            </div>
            
            <div className="bookInfo">
                
                        
                        <div className="authorIMG" alt="author image"><img src={book.Author_img}  alt="Author image"/></div>
                
                <ul>
                    <li > <h2>{book.BookTitle}</h2></li>
                    <li ><h4>{book.AuthorName}</h4></li>

                </ul>
            <div className="BookDes">
                <h4 >Book Description :</h4>
                <p className="description">{book.Book_Description}</p>
                </div>

            </div>
           </div>
                   
                ))}
            
            
            <div className="reviews-form">
            <h3 >Rate:</h3>
            <RateReview currentIdUser={12}/> 
            
            
            </div>
        </div>
        </>
    );
}

export default Box;