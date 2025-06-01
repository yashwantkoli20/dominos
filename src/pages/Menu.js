import React from "react";
import { Col, Container, Nav,Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/menu.css'
import vegPizza from '../images/s1.jpeg'



function Menu(){
    return(
    <div className="menu-page">
        {/* Navigation section */}
        <section className="nav2">\
            <Container>
                <Row>
                    <Col>
                          <Nav className="link mr-auto">
                            <Nav.Link as={Link} to="/veg" className="navLink">VEG PIZZAS</Nav.Link>
                            <Nav.Link as={Link} to="/non-veg" className="navLink">NON-VEG PIZZAS</Nav.Link>
                            <Nav.Link as={Link} to="/sideOrders" className="navLink">SIDE ORDERS</Nav.Link>
                            <Nav.Link as={Link} to="/beverages" className="navLink">BEHERAGES</Nav.Link>
                            <Nav.Link as={Link} to="/crusts" className="navLink">CHOICE OF CRUSTS</Nav.Link>
                            <Nav.Link as={Link} to="/toppings" className="navLink">CHOICE OF TOPPING</Nav.Link>
                            <Nav.Link as={Link} to="/pasta" className="navLink">PASTA</Nav.Link>
                            <Nav.Link as={Link} to="/burger" className="navLink">BURGER PIZZA </Nav.Link>
                          </Nav>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* {menu section} */}
        <section  className="menu">
            <Container>
                <Row className="breadcrumb py-4">
                 <h6>Home/MENU</h6>
                </Row>
                <Row className="text-center  py-3">
                 <Col>
                 <h1 className="menu-title">DOMINO'S MENU</h1>
                 </Col>
                </Row>
                <Row className="text-center py-4">
                 {[...Array(3)].map((_,index) =>(
                  <Col md={4} className="menu-card" key={index}>
                    <div>
                        <h3>VEG PIZZA</h3>
                        <img src={vegPizza} alt="veg Pizza" className="menu-image" />
                        <p>
                            A Delights for veggie lovers! Choose from our wide range of
                            delicious vegetarian pizzas ,its its a softer
                        </p>
                        {/* <button variant="primary" className="menu-btn">VIEW ALL</button> */}
                        <Button variant="primary">Primary</Button>
                    </div>
                  </Col>
                 ))}
                </Row>
            </Container>
        </section>

    </div>
    )
}
export default Menu;