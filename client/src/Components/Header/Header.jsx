import React,{useContext} from "react"; 

const Header=()=>{
 
 return (
  <div>
  <header>

    <div className="logo">
        <p><span>Gelato</span></p>
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


export default Header ; 
