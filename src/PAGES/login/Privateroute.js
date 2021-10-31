import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import Useauth from '../../context/Useauth';

const Privateroute = ({children,...rest}) => {
    const {user,loading} = Useauth()
    return (
        <div className="private-main">
{
  loading ?  <div className="py-5 my-5"><Spinner className="text-center m-auto d-block "  animation="border" variant="success" />
   <h3 className="text-center py-2 text-primary">loading............</h3>
  </div>  :


      <Route
      
      {...rest}
      render={({ location }) =>
       user?.email ? (
             children
           ) : (
             <Redirect
               to={{
                 pathname: "/login",
                 state: { from: location }
               }}
             />
           )
         }
      >
      
      </Route>
}
      </div>
    );
};

export default Privateroute;