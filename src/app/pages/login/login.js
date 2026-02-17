"use client"
import "./login.css"
import {  useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [signState, setsignState]=useState("Sign In")

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const result = await res.text();

    if (result === "SUCCESS") {
      navigate("/landing");
    } else {
      alert("Invalid Username or Password");
    }
  };

 

  return (
     <div className='login'>
             <img src="/assets/logo.png" alt="" className='login-logo'/>
         <div className="login-form">
          
         <h1>{signState}</h1>

        <form onSubmit={handleLogin}>
          
             {
            signState=="Sign Up"?<input type="email" placeholder="Email" onChange={(e)=>SegmentPrefixRSCPathnameNormalizer(e.target.value)}/>
            :
            <></>
          }
         

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />


<button type="submit">{signState}</button>
      
    </form>


    <div>
     <div className="remember">
              <input type="checkbox" /><label>Remember me</label>
              <p>Need Help ?</p>
      </div>   
        </div>
        
        <div className="switch-form">
          {
          
          signState==="Sign In"?
          <p>New to Netflix ? <span onClick={()=>setsignState("Sign Up")}>Sign Up Now</span></p> 
          : 
          <p>Already have Account ? <span onClick={()=>setsignState("Sign In")} >Sign In Now</span></p>

          }
        </div>
        </div>
      </div>
  
   
  );
}

export default Login;