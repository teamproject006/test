import React,{useContext} from "react"; 
import "./navbar.css"
import {Link,useNavigate} from "react-router-dom"
import { UserContext } from "../../useContext/userContext";
const Navbar=()=>{
  const {currentUser,handleUser}=useContext(UserContext)
  const navigate=useNavigate()
  const logout=()=>{
    handleUser({})
      localStorage.removeItem("token")
      navigate("/login")
  }

 
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

        <li>{currentUser.username?<span className="user-info">
        <img src={currentUser.imageUrl}/>
        {currentUser.username}
        </span>
        :<Link to="/login">Sign In</Link>}</li>
        <li>{currentUser.username?<p onClick={()=>logout()}>Logout</p>:<Link to="/register">Sign Up</Link>}</li>

    </ul>
  
    </header>

  </div>

 )



}


export default Navbar ; 
