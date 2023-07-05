import React from "react"; 
import "./navbar.css"
const Navbar=()=>{
 
 return (
  <div>
  <header>

    <div className="logo">
        <p><span>Farrahni</span></p>
    </div>
   
    <ul className="nav">
      
        <li><a href="#home">Our Products</a></li>
        <li><a href="#Shop">Our Shops</a></li>
        <li><a href="#product">Our Brand</a></li>
        <li><a href="login.html">Sign In</a></li>
        <li><a href="signup.html">Sign Up</a></li>

    </ul>
  
    </header>

  </div>

 )



}


export default Navbar ; 
