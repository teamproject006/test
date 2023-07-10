import React, { useState,useContext, useEffect } from 'react'
import "./oneservice.css"
import {UserContext} from '../../../useContext/userContext'
import One from './oneproduct/One.jsx'
function OneService() {
  const {service}=useContext(UserContext)
  const [specificService,setService]=useState({})
  const [images,setImages]=useState([])
  console.log(service)
  useEffect(()=>{
    const imagees=service.map(ele=>JSON.stringify(ele.images))
    setImages(imagees)
  },[])
console.log(service[0].logo)

  if(specificService.id){
    return  <One service={specificService}/>
  }
  return (
    <div className='allservices'>

      {service.map((ele,i)=>(
        <div key={ele.id} className="service-container" onClick={()=>setService(ele)} >
        
        <img className='' src={ele.logo} alt="service"/>
        
        <div  className="">
        <p className=''> {ele.companyName} </p>
        <p>{ele.description}</p>

        </div>
      </div>
      ))}
      
    </div>
  );
}

export default OneService