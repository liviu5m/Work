"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("/api/user", {
      params: {
        userId: localStorage.getItem("userId")
      }
    })
    .then(res => {
      if(res.data.email) setUser(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);