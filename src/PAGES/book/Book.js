import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Useauth from '../../context/Useauth';
import Fade from 'react-reveal/Fade';
import Geturl from '../../utilites/geturl';
Geturl()

const Book = () => {
  const nameref = useRef()
  const priceref = useRef()
    const location = useLocation()
    const history = useHistory()
let pending = 'pending'
    Math.random()
    
    const {id} = useParams()
    const {user} = Useauth()
    const[single,setsingle] = useState({})
    const { register, handleSubmit,reset,errors} = useForm({
        defaultValues: {name:single?.name,price:single?.price}
    });
    useEffect(()=>{
        fetch(Geturl(`single/${id}`))
        .then(res=>res.json())
        .then(data=>{
            setsingle(data)
        
        })
            },[id])
          
   
    
    const onSubmit = data =>{
    // data.delivery = name
    console.log(data);
    data.status = pending
      fetch(Geturl(`mybooking`),{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res =>res.json()) 
       .then(data =>{
           console.log(data);
  if(data.acknowledged){
      history.push('/mybooking')
    reset()
  }
  else{
     
  }
    
         
       })
    };
   
  
    return (
        // <div></div>
        <div className="py-5 my-5">
       
         <Container>

           <div className="row align-items-center">
            <Fade left>
            <div className="col-md-4">
              <div className="single shadow-lg ">
               <div className="imgs">
               <img className="img-fluid" src={single?.image} alt="" />
               </div>
                <h2 className="cart-title text-center mt-2">{single?.name}</h2>
                <h5 className="taka text-center">BDT <span className="price"> {single?.price}</span> per person </h5>
                <p className="text-center details">{single?.desc}</p>
          
                <button className="book-btn m-3">fill up form now</button>
             
            </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-8 my-5">
              <div className="">
                  <h5 className="text-center text-primary fw-bold py-3">fill up for booking </h5>
               <form onSubmit={handleSubmit(onSubmit)} className="text-center">
      {/* register your input into the hook by invoking the "register" function */}
     <label htmlFor="">package name:</label> <br />

     {
         single?.name &&  (
            <input defaultValue={single?.name} className="input"  {...register("name", )}  /> 
         ) 
     }
     <br /> <br />
      <label htmlFor="">package price:</label> <br />
    {
        single?.price && <input defaultValue={single?.price} className="input"  {...register("price",)} required />
    }
       <br /> <br /> 
      <label htmlFor="">ticket number:</label> <br />
      <input  className="input" defaultValue={Math.floor(Math.random() * 200) + 30 || 0} {...register("ticket", { required: true })} placeholder="coast" /> <br /> <br /> 
      <label htmlFor="">your email:</label> <br />
      <input  className="input" defaultValue={user?.email} {...register("email", )}  /> <br /> <br />
      <label htmlFor="">your name:</label> <br />
      <input  className="input" defaultValue={user?.displayName} {...register("displayname", )}  /> <br /> <br />
      <label htmlFor="">your address:</label> <br />
      <input  className="input"  {...register("address",)} placeholder="your address" /> <br /> <br />
      <label htmlFor="">your number:</label> <br />
      <input type="number"  className="input" {...register("number",)} placeholder="number" /> <br /> <br />
     
    
      <input type="submit" className="book-btn" value ="book ticket" />
    </form>
               </div>
              </div>
              </Fade>
           </div>
           </Container>
           
        </div>
    );
};

export default Book;