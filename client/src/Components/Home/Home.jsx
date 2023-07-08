import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import { UserContext } from '../../useContext/userContext'

const Home = () => {
    const {currentUser,handleUser}=useContext(UserContext)
    const [auth,setAuth]=useState(false)
    const [message,setMessage]=useState("")

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
    },[])
 

 
  return (
    <div>
      {auth?
      <div>
        <h3>You are authorized {currentUser.username}</h3>
        <button>Logout</button>
      </div>:
      <div>
        <h3>{message}</h3>
        <h3>login Now </h3>
        <button>login</button>
      </div>
      }
    </div>
  )
}

export default Home
