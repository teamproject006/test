import React, { useEffect, useState } from 'react'
import "./Login.css";
import axios from 'axios'
import { Link } from 'react-router-dom';

// import {  } from 'react-hook-form';


 const Login=()=>{

   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
   const [confirmpwd,setConfirmpwd]=useState("")

    useEffect(()=>{
        axios.post('http://localhost:3000/api/users/login',{
            username:"aminee",
            password:"1022222"
        }).then(res=>console.log(res.data))
        .catch(err=>console.log("err",err))
    },[])


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(username)
  console.log(password)
  console.log(confirmpwd)
}
    
    return (
        <section>
          <div className="register">
            <div className="col-1">
              <h2>Sign In</h2>
    
              <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  placeholder="username"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="password"
                />
                <input
                  type="password"
                  name="confirmpwd"
                  value={confirmpwd}
                  onChange={(e)=>setConfirmpwd(e.target.value)}
                  placeholder="confirm password"
                />
    
                <button className="btn" type="submit">
                  Sign In
                </button>
                <span>
                  Don't have an account? <Link to="/register">Register</Link>
                </span>
              </form>
            </div>
            <div className="col-2">
              <img src="https://www.theknot.com/tk-media/images/8f111626-128e-49a9-921a-c9fd21551435~rs_768.h" alt="" />
            </div>
          </div>
        </section>
      );
    };
    
    export default Login;