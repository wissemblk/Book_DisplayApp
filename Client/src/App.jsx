import React from 'react';
import './App.css';
import Box from './Components/Box.jsx';
import Navbar from './Components/Header.jsx';
import RateReview from './Components/RatingReview.jsx';
import CommentSection from './Components/commentBox.jsx';
import Axios from 'axios';


function App() {
  return (

    <div className='Contain'>
      <Navbar />
      <Box />
      <CommentSection/>
      








    </div>
  );
}

export default App;
