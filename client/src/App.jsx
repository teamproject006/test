import React from "react";
import Login from "./Components/Login/Login.jsx"
import Register from "./Components/Register/Register.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Secret from "./Components/Secret.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/" element={<Secret/>}/> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
