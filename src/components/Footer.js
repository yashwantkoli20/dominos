import React from "react";
import {Container,Row,Col} from 'react-bootstrap'

function Footer(){
    return(
        <div > 
            <section className='footer bg-dark text-light'>
                <Container>
                    <Row className="text-center py-5">
                        <Col sm={3}>
                            <h4>MENU</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Veg Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Chicken Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pasta Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pizza Crust</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Burger Pizza</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>MENU</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Veg Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Chicken Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pasta Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pizza Crust</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Burger Pizza</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>MENU</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Veg Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Chicken Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pasta Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pizza Crust</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Burger Pizza</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>MENU</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Veg Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Chicken Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pasta Pizza</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Pizza Crust</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Burger Pizza</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                    <hr></hr>
                <div className="text-center p-2">
                        <p>&copy; 2025 Yashwant. All rights reserved.</p>
                </div>
            </section>
        </div>
    )
}

export default Footer ; 