import React, { useEffect, useState,useContext } from 'react'
import "./allservice.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../useContext/userContext'
import { api } from '../../APi'

 const AllServices = () => {
  const {handleService}=useContext(UserContext)
  const [allservices,setAllServices]=useState([])
  const navigate=useNavigate()

  useEffect(()=>{
    
    axios.get(`${api}/services`)
    .then((res)=>setAllServices(res.data))
    .catch(err=>console.log(err))

  },[])

const handleCategory=(category)=>{
    const filteredService = allservices.filter(e=>e.category===category)
    handleService(filteredService)
    navigate("/one")
    window.scrollTo(0, 0);

}


  return (
      <div>
        <h1>OUR SERVICES</h1>
        <div className='cards-container'>
              <div className="card-items" onClick={()=>handleCategory("partyRoom")}>
                    <img src="https://www.marhba.com/images/mariage/mariage2022/laicotunis.jpg" alt="Service 1" />
                      <h4><b>Wedding Party Room</b></h4>  
              </div>
              <div className="card-items">
              <img   src="https://ruffledblog.com/wp-content/uploads/2020/03/matchinggroomlook-weddingtheme-_003.jpg" alt="Service 2"  />
                    <h4><b>Wedding Dress & Suit</b></h4> 
              </div>
              <div className="card-items">
                    <img onClick={()=>handleCategory("barber")}  src="https://www.myshoestories.com/media/wysiwyg/Best_Wedding_Hairstyles_For_Every_Bride_Style_2021_2022.jpg" alt="Service 3"  />
                    <h4><b>Hairdressing</b></h4>  
              </div>
              <div className="card-items" onClick={()=>handleCategory("cars")}>
                        <img src="https://www.eleganceweddingcars.co.uk/wp-content/uploads/2021/04/LWB-Silver-Cloud-Rolls-Royce-1750x1013.jpg" alt="Service 4"  />
                         <h4><b> Wedding Cars </b></h4>   
              </div>
              <div className="card-items">
                    <img  src="https://flowerdeliveryhoustontx.com/wp-content/uploads/wedding-flowers.jpg" alt="Service 5"  />
                    <h4><b>Florist</b></h4> 
              </div>
              <div className="card-items">
                    <img src="https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2017/07/floralweddingcake.jpg?w=620&h=348&crop=1" alt="Service 5"  />
                    <h4><b> Wedding Cake</b></h4> 
              </div>
        </div>
      </div>
  )
}
export default AllServices



{/* <>
<h1>OUR SERVICES</h1>
      <div className="s">
        
        <div className="container">
    <div className="card">
        <img className="pic"  src="https://www.marhba.com/images/mariage/mariage2022/laicotunis.jpg" alt="Service 1" />
          <h4><b>Wedding Party Room</b></h4>  
    </div>
    <div className="card" onClick={()=>handleCategory("partyRoom")}>
        <img className="pic"  src="https://ruffledblog.com/wp-content/uploads/2020/03/matchinggroomlook-weddingtheme-_003.jpg" alt="Service 2"  />
          <h4><b>Wedding Dress & Suit</b></h4>  
    </div>
    </div>
    <div className="container">
    <div className="card" >
        <img className="pic"  src="https://www.myshoestories.com/media/wysiwyg/Best_Wedding_Hairstyles_For_Every_Bride_Style_2021_2022.jpg" alt="Service 3"  />
          <h4><b>Hairdressing</b></h4>  
    </div>
    <div className="card" onClick={()=>handleCategory("cars")}>
        <img className="pic"  src="https://www.eleganceweddingcars.co.uk/wp-content/uploads/2021/04/LWB-Silver-Cloud-Rolls-Royce-1750x1013.jpg" alt="Service 4"  />
          <h4><b> Wedding Cars </b></h4>  
    </div>
   </div>
   <div className='container'>
    <div className="card">
        <img className="pic"  src="https://flowerdeliveryhoustontx.com/wp-content/uploads/wedding-flowers.jpg" alt="Service 5"  />
          <h4><b>Florist</b></h4>  
    </div>
    <div className="card">
        <img className="pic"  src="https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2017/07/floralweddingcake.jpg?w=620&h=348&crop=1" alt="Service 5"  />
          <h4><b> Wedding Cake</b></h4>  
    </div>
    </div>
    </div>
    </> */}
