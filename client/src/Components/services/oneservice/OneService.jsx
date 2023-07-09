import React, { useState,useContext } from 'react'
import "./oneservice.css"
import {UserContext} from '../../../useContext/userContext'
import One from './oneproduct/One.jsx'
function OneService() {
  const {service}=useContext(UserContext)
  const [specificService,setService]=useState({})


  if(specificService.id){
    return  <One service={specificService}/>
  }
  return (
    <div className='allservice'>

      {service.map(ele=>(
        <div key={ele.id} className="service" onClick={()=>setService(ele)} >
        <div className="div1" >
        <img className='imgr' src={ele.images.split(" ")[2]} alt="service"/>
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