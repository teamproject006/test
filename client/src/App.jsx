import React,{useState,useEffect} from "react";
import Login from "./Components/Login/Login.jsx"
import Register from "./Components/Register/Register.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import UserContextPovider from "./useContext/userContext.js";
import Calend from './Components/Calender/Calendar.jsx'
function App() {

  return (  
  <UserContextPovider>
        <div className="App">
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/calender" element={<Calend/>}/>
          </Routes>
          </BrowserRouter>
          </div>
    </UserContextPovider>
  );
}

export default App;
