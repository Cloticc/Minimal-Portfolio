import React, { createContext, useState } from 'react';

export const MyContext = createContext({} as any);



interface ChildrenProps {
  children: React.ReactNode;
}

export const MyContextProvider = ({ children }: ChildrenProps) => {
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


