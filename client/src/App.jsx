import React,{useState,useEffect} from "react";
import Login from "./Components/Login/Login.jsx"
import Register from "./Components/Register/Register.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import UserContextPovider from "./useContext/userContext.js";
import axios from "axios";
function App() {
  // const [auth,setAuth]=useState(false)
  // const [currentUser,setCurrentUser]=useState({})
  // useEffect(()=>{
  //     axios.get("http://localhost:3001/api/users")
  //     .then(res=>setCurrentUser(res.data))
  //     .catch(err=>console.log(err))
  // },[])
  return (  
  <UserContextPovider>
        <div className="App">
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          </BrowserRouter>
          </div>
    </UserContextPovider>
  );
}

export default App;
