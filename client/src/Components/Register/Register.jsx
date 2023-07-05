import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {

  const[username,setUsername]=useState("")
  const[mail,setMail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmpwd,setConfirmpwd]=useState("")
  const[mobile,setMobile]=useState("")

 const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(username)
    console.log(mail)
    console.log(password)
    console.log(confirmpwd)
    console.log(mobile)
 }

  
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Register </h2>
          <span>register and enjoy the service</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit} >
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="username"
            />
           
            <input
              type="text"
              name="mail"
              value={mail}
              onChange={(e)=>setMail(e.target.value)}
              placeholder="enter mail"
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
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              placeholder="mobile number"
            />
        

            <input type="file" placeholder="add your image" />

            <button className="btn" type="submit">
              Register
            </button>

            <span>
              Already have an account? <Link to="/login">Login</Link>
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

export default Register;
