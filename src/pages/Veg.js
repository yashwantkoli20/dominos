import React from "react";
import '../styles/veg.css'
import veg from '../images/s3.jpeg'
import veg1 from '../images/s1.jpeg'
import veg2 from '../images/s2.jpeg'
import vegAnimatin from '../images/veg.mp4'
import { Button, Col, Container, Row } from "react-bootstrap";
function Veg (){
     return(
        <div className="veg-page">
            <section className="hero">
                <video className="veg-video" autoPlay loop muted>
                    <source src={vegAnimatin} type="video/mp4" />
                </video>
                <div className="hero-text">
                    <h1>veggie Delight pizza</h1>
                    <p>Fresh Ingredients, Unique Tastes, and Irreistible Flavors!</p>
                </div>
            </section>

            <section className="veg-menu">
                <Container>
                    <h2 className="menu-title" >
                        Explore Our Veggie Pizza Collection
                    </h2>
                    <Row className="menu-row">
                        <Col md={3} className="menu-card">
                            <img src={veg} alt = "veg pizza 1" className="menu-img"/>
                            <h3>Farmhouse pizza</h3>
                            <p>Loaded with fresh veggie  like capsicum, onions, tomatoes, and golden corn.</p>
                            <Button variant="primary" className="order-btn">
                                Order now
                            </Button>
                        </Col>
                        <Col md={3} className="menu-card">
                            <img src={veg1} alt = "veg pizza 1" className="menu-img"/>
                            <h3>Corn pizza</h3>
                            <p>Loaded with fresh golden corn.</p>
                            <Button variant="primary" className="order-btn">
                                Order now
                            </Button>
                        </Col>
                        <Col md={3} className="menu-card">
                            <img src={veg2} alt = "veg pizza 1" className="menu-img"/>
                            <h3>Paneer tandur pizza</h3>
                            <p>Loaded with Paneer.</p>
                            <Button variant="primary" className="order-btn">
                                Order now
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Veg ;