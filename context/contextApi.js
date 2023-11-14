import React, { createContext, useContext, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';



const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};



export const AppContextProvider = ({ children }) => {

  return (
    <AppContext.Provider value={{ }}>
      {children}
    </AppContext.Provider>
  );
};

