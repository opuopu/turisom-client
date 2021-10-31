import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'
const Notfound = () => {
    return (
        <div className="notfound" >
          <h1 className="h1s">opps 404 error!</h1>
          <p>page not found. back to home</p>
        <Link to="/home">
<button className="book-btn">back to home</button>
        </Link>
            
        </div>
    );
};

export default Notfound;