import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import { UserContext } from '../../useContext/userContext'
import BackGround from "../background/Background.jsx"
import AllServices from '../services/AllServices.jsx'

const Home = () => {
    const {currentUser,handleUser}=useContext(UserContext)
    const [auth,setAuth]=useState(false)
   

    useEffect(()=>{
      const token=localStorage.getItem("token")
      axios.post("http://localhost:3004/api/users",{"token":token})
      .then(res=>{
        if(res.data.user){
          handleUser(res.data.user)
          setAuth(true)
        }
       })
      
      .catch(err=>console.log("errrr",err))
    },[handleUser])
 

 
  return (
    <div>
      <BackGround />
      <AllServices/>
    </div>
  )
}

export default Home
