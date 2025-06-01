import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import aboutimg from"../images/about.jpeg";

function About(){
return(
    <div>
        <section className="'About">
            <Container>
                <Row>
                    <Col>
                    <hr/>
                    <h6>HOME / ABOUT</h6>
                    </Col>
                </Row>
                <Row className='text-center py-4'>
                    <h2 style={{color:'red',textDecoration:'underline',fontFamily:'fantasy'}}>
                        WHO WE ARE
                    </h2>
                </Row>
                <hr/>
                <Row>
                    <p>A great-tasting pizza is all about balancing the sauces, herbs, cheese, and toppings. The moment you bite into a cheese-filled pizza it should create a riot of flavors, sending a happy signal to your brain. If you are wondering which delivery food stores can give you this ultimate culinary experience, then the answer is Domino’s!The traditional offerings of Domino’s have you covered with all sorts of pizzas, but if you are in the mood to try something different, then go ahead to request a customized pizza along with pasta, tangy sides, and yummy desserts. when you order food online from Domino’s restaurant nearby that delivers to your location.</p>
         <p>You can choose between different crusts like new hand-tossed, wheat thin, cheese burst, and fresh pan. You can then top the pie with your favorite veggie and meat toppings and even add extra cheese! Domino’s delivery in Pune upon receiving your order will craft the pie exactly how you like it and the food home delivery partner will bring the order right to your doorstep or any location that you specify.You can choose between different crusts like new hand-tossed, wheat thin, cheese burst, and fresh pan. You can then top the pie with your favorite veggie and meat toppings and even add extra cheese! Domino’s delivery in Pune upon receiving your order will craft the pie exactly how you like it and the food home delivery partner will bring the order right to your doorstep or any location that you specify.</p>
         <p>Domino’s remains uncontested as one of the best delivery restaurants in India. Domino’s home delivery service empowers you to track the complete process from the start of the order till the pizza delivery is done so that you stay informed at every step. Looking for food delivery in Ahmedabad that is open late at night? Save Domino’s on your speed dial!</p>
                </Row>
                <Row>
                    <img src={aboutimg} height={400} style={{paddingBottom:'20px'}}></img>
                </Row>
            </Container>
        </section>
    </div>
)
}
export default About;