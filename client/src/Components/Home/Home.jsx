import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import { UserContext } from '../../useContext/userContext'
import BackGround from "../background/Background.jsx"
import AllServices from '../services/AllServices.jsx'
import { api } from '../../APi'
import Version from "../Footer/Footer";
import Aboutus from "../Aboutus/Aboutus.jsx"
import "./home.css"
const Home = () => {
    const {handleUser}=useContext(UserContext)
   
   

    useEffect(()=>{
      const token=localStorage.getItem("token")
      axios.post(`${api}/users`,{"token":token})
      .then(res=>{
        if(res.data.user){
          handleUser(res.data.user)
        
        }
       })
      
      .catch(err=>console.log("errrr",err))
    },[])
 

 
  return (
    <div className='homee-container'>
      <BackGround />
      <AllServices/>
      <Aboutus/>

      <Version/>

    </div>
  )
}

export default Home
