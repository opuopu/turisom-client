import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Useauth from '../../context/Useauth';
import './header.css'

const Header = () => {
    const {user,logout} = Useauth()
    console.log(user);
    return (


 <Navbar fixed="top" collapseOnSelect expand="lg" className="navbars m-0" variant="dark">
<Container>
<Navbar.Brand href="#home"> <h2 className="h">Share<span className="h-span">trip</span></h2> </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
<Nav className="ms-auto">
<Nav.Link className="text-white fw-bold"  as={Link} to="/home">Home</Nav.Link>
{
   user?.email && <Nav.Link as={Link}  className=" text-white fw-bold" to="/addservice">add service</Nav.Link>
}
{
  user?.email && <Nav.Link as={Link} className="text-white fw-bold" to="/managebooking">manage booking</Nav.Link>
}
{
  user?.email && <Nav.Link as={Link}  className="text-white fw-bold" to="/mybooking">my booking</Nav.Link>
}

{ user?.email ? <Link to="/home"><button onClick={logout} className="logout">logout</button></Link> : <Nav.Link  className="text-danger login fw-bold" as={Link} to="/login">login</Nav.Link> }
 {
  user?.displayName?   <p className="mt-2">as: <span className="fw-bold"> {user.displayName}</span></p> :
  <p className="mt-2">as: <span className="fw-bold"> {user.email}</span></p>
}




</Nav>
</Navbar.Collapse>
</Container>
</Navbar> 

    )
}

// ----------------------------------------
// * 
//     );
// };

export default Header;