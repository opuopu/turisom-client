import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'
import { BiLocationPlus } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { GiFastForwardButton } from "react-icons/gi";
import Jump from 'react-reveal/Jump';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import { Spinner } from 'react-bootstrap';

const Services = (props) => {
    const {image,name,desc,_id,price} = props.service || {}
    
  
    
    return (
      
        <Jump>
        <div className="col-md-4">
            <div className="single shadow-lg ">
               <div className="imgs">
               <img className="img-fluid" src={image} alt="" />
               </div>
                <h2 className="cart-title text-center mt-2"> <BiLocationPlus/> {name}</h2>
                <h5 className="taka text-center">BDT <span className="price"> <MdAttachMoney/>{price}</span> per person </h5>
                <p className="text-center details">{desc}</p>
                <Link to={`/booking/${_id}`}>
                <button className="book-btn m-3"><GiFastForwardButton/> book now</button>
                </Link>
            </div>
        </div>
        </Jump>
    );
};

export default Services;