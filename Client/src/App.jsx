import React from 'react';
import './Styles/App.css';
import Box from './Components/Box.jsx';
import Navbar from './Components/Header.jsx';
import RateReview from './Components/RatingReview.jsx';
import CommentSection from './Components/commentBox.jsx';
import Axios from 'axios';


function App() {
  return (

    <div className='Contain'>
      <Navbar />
      <Box index={1}/>
      <CommentSection/>
      








    </div>
  );
}

export default App;
