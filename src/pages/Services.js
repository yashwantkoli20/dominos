import React from "react";
import '../styles/services.css'
import img1 from '../images/s1.jpeg'
import img2 from '../images/s2.jpeg'
import img3 from '../images/s3.jpeg'
// import img4 from '../images/s4.jpeg'
function Services (){


    const services = [
        {
            title:"Fresh Ingredients",
            description : "we use only the frewshest and dinest ingredients for all our pozzzas , ensuring every bite is delicious",
            image : img1,
        },
        {
            title: "fast delivery",
            description : "hot and fresh pozza delivered to your doorstep in no time. we prioritize speed without compromising quality.",
            image : img2,
        },
        {
            title : "customizable pizzas ",
            description :  "Hot and fresh pizza deliverd to your doorstep in no time, we prioritize speed without compromising quality.",
            image : img3,
        },
        {
            title: "24/7 Support ?  ",
            description : "need help?  Our costomer support team is available round the clock to assist you.",
            image : img3,
        }
    ]




     return(
         <div className=" services">
            <h1 >Our Services</h1>
            <div className="services-container">
                {services.map((service,index)=>(
                    <div className="services-card " key= {index}>
                        <img src={service.image} alt={service.title}/>
                        <h3>{service.title}</h3>
                        <p>{service.description}    </p>
                    </div>
                ))}
            </div>
        </div>   
    )
}

export default Services ;