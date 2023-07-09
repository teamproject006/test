import React from 'react'
import Image from  "./Image.jsx"
import Reservation from '../../../Reservation/Reservation.jsx'
import './one.css'


const  One=({service})=>{
  return(
    <div className='One-container'>
      
    <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src={service.logo} alt="" /> 
       
        </div>
      </div>
      <div className="description_container">
        <h1>Company Name: </h1>
        <h2>{service.companyName}</h2>
        <h3>Cost : $ {service.costPerDay} </h3>
     
        
        <h3>description</h3>
        <span>
         {service.description}
        </span>
   
        <div >
       
        </div>
      
      </div>
    
    </div>

  </section>
  <Image images={service.images}/>
  <Reservation service={service}/>
  </div>


   
)

}


export default One
