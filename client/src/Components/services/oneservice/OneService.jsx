import React, { useState,useContext } from 'react'
import "./oneservice.css"
import {UserContext} from '../../../useContext/userContext'
function OneService() {
  const {service}=useContext(UserContext)
  const [specificService,setService]=useState({})


  if(specificService.id){
    return  
  }
  return (
    <div className='allservice'>

      {service.map(ele=>(
        <div key={ele.id} className="service" >
        <div className="div1" >
        <img className='imgr' src={ele.images.split(" ")[2]} />
        </div>
        <div  className="div2">
        <p className='title'> {ele.companyName} </p>
        <p>{ele.description}</p>

        </div>
      </div>
      ))}
      
    </div>
  );
}

export default OneService