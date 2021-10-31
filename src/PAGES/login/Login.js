import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Useauth from '../../context/Useauth';
import { IconName,FcGoogle } from "react-icons/fc";

import './login.css'

const Login = () => {
    const {googlesign} = Useauth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url =  location.state?.from || '/home'

    const handlelogin = () =>{
        googlesign()
        .then(result=>{
            history.push(redirect_url)
        })
    }
    return (
        <div className="login-main py-5 ">

        <Container>
            <div className="d-flex align-items-center justify-content-around flex-column flex-lg-row">
                <div className="">
                    <h1 className="login-title">Login here</h1>
                   
              
              
               
    {/*   
                <button onClick={googlesignin}>google</button> */}
                <button onClick={handlelogin} className="google-btn"> <FcGoogle/> google sign in</button>
                <p className="my-3 fw-bold text-info">sign in now for more fetaures..</p>
            
                   
                </div>
                <div >
    <img  src='https://i.postimg.cc/ZKJkJMLC/access-control-system-abstract-concept-335657-3180.jpg' className="img-fluid" alt="" />
                </div>
            </div>
        </Container>
    </div>
    );
};

export default Login;