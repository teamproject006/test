import React from "react";
import Login from "./Components/Login/Login.jsx"
import Register from "./Components/Register/Register.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import UserContextPovider from "./useContext/userContext.js";
import Reservation from './Components/Reservation/Reservation.jsx'
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
            <Route path="/reservation" element={<Reservation/>}/>
          </Routes>
          </BrowserRouter>
          </div>
    </UserContextPovider>
  );
}

export default App;
