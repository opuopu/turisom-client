 import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'
 
 const Footer = () => {
     return (
        <div className="footer-main p-5">
        <Container>
            <div className="row footer-m ">
                

            
                <div className="col-md-6">
<h1 className="footer-t fw-bold text-white mb-4">Sharetrip</h1>
<p> Book online and receive instant confirmation. Pay with cards, bKash and save more. Online Payment. Best Deals. Fast & Easy Booking. bKash payment. Debit/ Credit car</p>
<Link to ="/home">
         <button className="book-btn"> <i className="far fa-calendar-check"></i> Book package </button>
         </Link>
                </div>
                <div className="col-md-3">
                    <h2 className="text-white fw-bold">Approved Agent</h2>
                    <h5 className="text-white">Bangladesh airlines</h5>
                    <h5 className="text-white">commodo sqe</h5>
                    <h5 className="text-white">basis</h5>
                    <h5 className="text-white">contact</h5>
                    <h5 className="text-white">package</h5>
                </div>
                <div className="col-md-3">
<h2 className="text-white fw-bold">address</h2>
<h5 className=" text-white">sharetrip private co limited</h5>
<p className="text-white">Plot-9, Road-4, Section -7, <br />Mirpur-Dhaka 1216 <br /> Phone: 01875685789,01895734895.
</p>
                </div>
                <div className="footer-last row mt-5 pb-3">
                  <div className="col-md-6 d-flex">
                  <p className=" text-white col-md-6">Copyright © 2021 sharetrip |</p>
                       <p className="mx-3 text-white"><i className="fab fa-facebook"></i> </p>
                    <p className="text-white"><i className="fab fa-twitter"></i></p>
                    <p className=" mx-3 text-white"><i className="fab fa-youtube"></i></p>
                  </div>
                    <div className="d-flex col-md-6 justify-content-end ">
                 
                    <img className="mx-4" width="70px" height="40px" src="https://i.postimg.cc/tRnBxtBp/amex-new.png" alt="" />
                   <img className="mx-4" width="70px" height="40px" src="https://i.postimg.cc/fbFgGH8q/bkash-new.png" alt="" />
                   <img className="" width="70px" height="40px" src="https://i.postimg.cc/3JFr3p5F/visa-new.png" alt="" />
                   <img className="mx-4" width="70px" height="40px" src="https://i.postimg.cc/65jSV5dN/nogod-new.png" alt="" />

                    </div>
                </div>
             
            </div>
           
        </Container>
    </div>
     );
 };
 
 export default Footer;