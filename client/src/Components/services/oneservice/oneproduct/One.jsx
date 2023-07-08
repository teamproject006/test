import React from 'react'
import Image from  "./Image.jsx"
import Reservation from '../../../Reservation/Reservation.jsx'
import './one.css'


const  One=()=>{
  return(
    <div className='One-container'>
      
    <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src="https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/327194626_1618836058565905_2766110698324352424_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pzDrEt-01lUAX8htOY7&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCrSN6XWpoqxJygtWIo_BJn7e9h_N4X24ahNXfBqTCq3A&oe=64AB6565" alt="" /> 
       
        </div>
      </div>
      <div className="right">
        <span></span>
        <h1>Glof Carthage </h1>
        <div className="price">La soukra</div>
     
        
        <h3>description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
          delectus nulla voluptates nesciunt quidem laudantium, quisquam
          voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
        </p>
   
        <div >
       
        </div>
      
      </div>
    
    </div>

  </section>
 <Image/>
  <Reservation/>
  </div>


   
)

}


export default One
