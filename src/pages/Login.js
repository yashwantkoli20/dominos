import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/login.css' ;
function Login (){

    const history = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
        
    
        e.preventDefault();
        
        try{
            const res = await axios.post("http://localhost:8080/login",{
                email,
                password
            });

            if(res.data === "login successful"){
                history ("/",{state : {id : email}});
            }else{
                alert("Login faild");
            }
        }catch (e){
            alert ("something went wrong");
            console.log(e);
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="emial" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                <button type="submit" >Login</button>
            </form>
            <br />
            <p>OR</p>
            <Link to="/signup" >Signup Page</Link>
        </div>
    );   

}

export default Login ;