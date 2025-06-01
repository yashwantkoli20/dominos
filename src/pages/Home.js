import { Height } from "@mui/icons-material";
import React from "react";
import { Button, Col, Container, Row ,Card} from "react-bootstrap";
import '../styles/Home.css'
import img1 from '../images/c1.jpeg'
import img2 from '../images/c2.jpeg'
import ca1 from '../images/ca1.jpeg'
import ca2 from '../images/ca2.jpeg'
import ca3 from '../images/ca3.jpeg'
import ca4 from '../images/ca4.jpeg'

function Home (){
     return(
        
        <div>
            <section className="Banner">
                <Container className="py-5">
                    <Row className="py-4">
                        <Col>
                            <h1>DOMINO'S ONLINE ORDERING</h1>
                            <h5 className="mb-4">  Yummy Pizza Delivered FAst and Greash</h5>
                            <Button variant="success" className="fw-bolder">
                                Orders Online Now
                            </Button>
                                  {/* <Button variant="primary">Primary</Button> */}

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="Coupons">
                <Row style={{color:'blue',fontFamily:'sans-serif' , fontWeight:'bolder'}}>
                    <h3>Coupons & Offers</h3>
                </Row>
                <Container>
                    <Row className="py-4">
                        <Col md={6}>
                            <img src={img1} style={{width:'80%'}}></img>
                        </Col>
                        <Col md={6}>
                            <img src={img2} style={{width:'80%'}}></img>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section >
                <Row className="py-4">
                    <Col>
                        <h3 style={{color:'blue',fontFamily:'sans-serif', fontWeight:"bolder"}}>
                            Explore
                        </h3>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={3}>
                        <Card style={{width:"16rem"}}>
                            <Card.Img variant="top" src={ca1} style={{height:'150px'}}></Card.Img>
                            <Card.Text>Exaplore our range of delecious pizza , deliverd in 30 minutes ! </Card.Text>
                            <Button variant="primary">Discover</Button>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{width:"16rem"}}>
                            <Card.Img variant="top" src={ca2} style={{height:'150px'}}></Card.Img>
                            <Card.Text>Exaplore our range of delecious pizza , deliverd in 30 minutes ! </Card.Text>
                            <Button variant="primary">Discover</Button>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{width:"16rem"}}>
                            <Card.Img variant="top" src={ca3} style={{height:'150px'}}></Card.Img>
                            <Card.Text>Exaplore our range of delecious pizza , deliverd in 30 minutes ! </Card.Text>
                            <Button variant="primary">Discover</Button>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{width:"16rem"}}>
                            <Card.Img variant="top" src={ca4} style={{height:'150px'}}></Card.Img>
                            <Card.Text>Exaplore our range of delecious pizza , deliverd in 30 minutes ! </Card.Text>
                            <Button variant="primary">Discover</Button>
                        </Card>
                    </Col>
                    
                </Row>
            </section>
            
        </div>
        
    )
}

export default Home ;