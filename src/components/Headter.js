import React from "react";
import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from '../images/Logo.jpeg'
function Header (){
     return(
        <Navbar className="navbar" expand="lg">
            <Container >
                <Navbar.Brand as ={Link} to="/">
                    <img src={logo} style={{marginTop:'-10px'}}></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="link mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/services"> Services </Nav.Link>
                        <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>       
    )
}

export default Header ;