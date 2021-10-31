import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from './services';
import { FcNext,FcRight,GrGooglePlay } from "react-icons/fc";
import { FaGooglePlay} from "react-icons/fa";
import { AiFillApple} from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Geturl from '../../utilites/geturl';


Geturl()

const Home = () => {
    const [services,setservices] = useState([])
    const [loading,setloading] = useState(false)
    useEffect(()=>{
        fetch(Geturl(`getservice`))  
        .then(res=>res.json())
        .then(data =>{
            setservices(data)
            setloading(true)
        })
    },[])
   
    return (
       
        <div>
    <div id="top">
      <div className="middle ">
     <Fade left>
     <h1 className="text-white home-title ">Get the Cheapest Fares on tour  Booking</h1>
     </Fade>
      <Fade right>
      <p className="text-white  fw-bold">we have more than 20+ tour package for you. you can find that chipeast price. also you can book tour ticket.</p>
      </Fade>
    <Fade left>
    <button className="book-btn">Booking package</button>
    </Fade>
    
      </div>
    </div>
           
             
     

     
           <Container>
               <h1 className="text-center titles my-5 "> <FcRight/> Our Tour package</h1>
              
 <div className="row g-4">
 {
     !loading ? <Spinner className="mx-auto d-block " animation="border" variant="primary" /> :
      services?.map(service => <Services key={service._id} service={service}></Services>) 
     
 }
</div> 
               
              
           </Container>

          

           <Container>
               <h1 className="titles text-center my-4">our commitment</h1>
               <div className="row align-items-center py-5">
                   <Fade left>
                   <div className="col-md-7">
                       <h3 className="cart-title">Safe, Private, And Spacious Luxury Homes. We'll Help You Go Safely. Travel Safely With Inspirato for $2,500 Per Month With No Nightly Ratesy</h3>
                       <p className="details">We guarantee the 100% safety tours in any country please book ticket</p>
                       <Link to="/details">
                       <button className="book-btn">details cheek</button>
                       </Link>
                   </div>
                   </Fade>
                  <Fade right>
                  <div className="col-md-5">
                       <img className="img-fluid" src="https://redx.com.bd/images/revamp/bangladash-map.svg" alt="" />
                   </div>
                  </Fade>
                    
               </div>
           </Container>
           <Container>
        <h1 className="text-center titles-2 my-5">Booking from our apps</h1>
        <div className="row align-items-center">
           <Fade left>
           <div className="col-md-6">
                <div className="cart py-2">
                    <img className="img-fluid" src="https://i.postimg.cc/gJ3xrpMC/app.png" alt="" />
                </div>
            </div>
           </Fade>
            <Fade right>
            <div className="col-md-6">
                <div className="cart">
               <h1 className="tt">  Download share trip now</h1>
               <button className="book-btn mx-3 my-3"> <FaGooglePlay/> download google play</button>
               <button className="book-btn my-3"> <AiFillApple/> download from app store</button>
                </div>
            </div>
            </Fade>
        </div>
           </Container>
        </div>
    );
};

export default Home;