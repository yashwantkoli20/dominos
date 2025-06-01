import axios from "axios";
import React, { useState } from "react";
import { Col, Form, Button,Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import '../styles/signup.css'
function Signup (){
    const history = useNavigate();
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
 
    async function submit(e) {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8080/register",{
                email,
                password
            });
            if(res.data === "Registration Successful"){
                history("/",{state : {id:email}})
            } else {
                alert ("Unexpected response :" + res.data);
        }
        }
        catch (error){
            if(error.response){
                console.log("error response : ",error.response.data);
                alert("error : "+ error.response.data)
            }else{
                console.log("error : " + error.message );
                alert("Error : " + error.message)
            }
        }
    }

    return(
            <div className="signup">
                <h1>
                    Signup form
                </h1>
                <from onSubmit={submit}>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        required 
                        />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                        required 
                        />
                        < br />
                        <Button variant="primary" >Login page</Button>
                </from>
                <br />
                <p> OR </p>
                <Link to = "/login">Login page</Link>
                {/* <Link></Link> */}
            </div>
        
    )

}

export default Signup ;