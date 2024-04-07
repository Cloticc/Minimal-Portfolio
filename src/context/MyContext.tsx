import React, { FC, ReactNode, createContext, useState } from 'react';

interface ContextState {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<ContextState | undefined>(undefined);

interface ChildrenProps {
  children: ReactNode;
}

export const MyContextProvider: FC<ChildrenProps> = ({ children }) => {
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