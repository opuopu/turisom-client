import React from 'react';
import { useForm } from 'react-hook-form';
import './addservice.css'
import { IconName } from "react-icons/gi";

const Addservice = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
       fetch('https://pacific-river-07624.herokuapp.com/addservice',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res =>res.json())
       .then(data =>{
           reset()
       })
    };
  

    return (
        <div className="manage-main">
            <h1 className="text-center mt-3 titles">add a package</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center py-5">
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="">enter img url:</label> <br />
      <input className="input" {...register("image")} placeholder="enter img url" />  <br /> <br />
      <label htmlFor="">enter package name:</label> <br />
      <input className="input" {...register("name",)} placeholder="enter package name" /> <br /> <br />
      <label htmlFor="">enter cost:</label> <br />
      <input placeholder="enter cost " className="input" {...register("price",)} /> <br /> <br />
      <label htmlFor="">enter description::</label> <br />
      <input className="input"  {...register("desc")} placeholder="enter description" /> <br /> <br />
      <input type="submit" className="book-btn" value ="add package" />
    </form>
        </div>
    );
};

export default Addservice;