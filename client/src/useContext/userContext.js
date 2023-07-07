import React, { createContext, useState } from "react";
export const UserContext = createContext();
const UserContextPovider = (props) => {
    const [currentUser,setCurrentUser]=useState({})

    const handleUser=(user)=>{
      console.log(user)
      setCurrentUser(user)
    }


    const contextValue={
      currentUser,
      handleUser
    }
    return (
        <UserContext.Provider value={contextValue}>
          {props.children}
        </UserContext.Provider >
      );



}
export default UserContextPovider