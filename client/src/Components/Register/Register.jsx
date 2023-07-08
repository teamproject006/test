import React, { useState } from 'react';
import './Register.css';
import { Link,useNavigate } from 'react-router-dom';
import  axios from "axios"
const Register = () => {
  const Navigate=useNavigate()
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmpwd,setConfirmpwd]=useState("")
  const[phoneNumber,setPhoneNumber]=useState("")
  const[imageUrl,setImageUrl]=useState("")
  const[file,setFile]=useState("")


  const uploadImage=async()=>{
    const form=new FormData()
    form.append("file",file)
    form.append("upload_preset","travelMind")
    await axios.post("https://api.cloudinary.com/v1_1/do25iiz1j/upload",form)
    .then(res=>{
      setImageUrl(res.data.secure_url)
      console.log(res.data.secure_url)
    })
    .catch(err=>console.log(err))
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3004/api/users/register",{
      username,email,password,imageUrl,phoneNumber
    }).then(()=>{
        Navigate("/login")
    })
    .catch(()=>{
        alert("Username aleardy used")
        username("")
    })
  // try{
  // const response=await axios.post("http://localhost:3001/api/users/register",{
  //   "username":username,"password":password
  // })
  // const data =response.data
  // console.log(data)
  // }catch(err){
  //   console.log(err)
  // }
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
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="enter email"
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
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e)=>setPhoneNumber(e.target.value)}
              placeholder="phoneNumber number"
            />
        

        <input 
        className='image-input'
         type='file' 
         onChange={(e)=>setFile(e.target.files[0])} 
         />
           <button type='button' className='btn' onClick={()=>{
                  uploadImage()
                }} >upload Image</button>

            {         imageUrl
                        &&
                      <button className="btn" type="submit">
                        Register
                      </button>
              }

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
