import React, { useState,useContext } from 'react'
import "./Login.css";
import axios from 'axios'
import { Link,useNavigate} from 'react-router-dom';
import { UserContext } from '../../useContext/userContext'






 const Login=()=>{
  const {handleUser}=useContext(UserContext)
   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")

  const navigate=useNavigate()



axios.defaults.withCredentials=true
const handleSubmit= (e)=>{
  e.preventDefault()
  axios.post("http://localhost:3005/api/users/login",{
  "username":username,"password":password
  }).then(res=>{

    localStorage.setItem("token",res.data.token)

    if(res.data.user){
      handleUser(res.data.user)
        navigate("/")
    }else{
       alert("invalid username or password")
        setUsername("") 
        setPassword("")
    }
  })
    .catch(err=>console.log(err))

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