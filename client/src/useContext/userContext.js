import React, { createContext, useState } from "react";
export const UserContext = createContext();
const UserContextPovider = (props) => {
    const [currentUser,setCurrentUser]=useState({})
    const [service,setService]=useState([])
    const handleService=(arr)=>{
      setService(arr)
    }
    const handleUser=(user)=>{
      
      setCurrentUser(user)
    }


    const contextValue={
      currentUser,
      handleUser,
      service,
      handleService
    }
    return (
        <UserContext.Provider value={contextValue}>
          {props.children}
        </UserContext.Provider >
      );



}
export default UserContextPovider