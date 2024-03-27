import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);




  const value = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};


