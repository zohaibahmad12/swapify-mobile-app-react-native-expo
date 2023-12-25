import React, { createContext, useContext, useEffect, useState } from 'react';




const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};



export const AppContextProvider = ({ children }) => {

  const [likedItems, setLikedItems] = useState([]);

  const handleLikeToggle = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter((item) => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }

    console.log(likedItems);
  };


  const deleteLikedItem = (productId) => {

    const isLiked = likedItems.includes(productId);
    // console.log(likedItems);
    // console.log(id);

    if (isLiked) {

      const updatedLikedItems = likedItems.filter((id) => id !== productId);

      // console.log(updatedLikedItems);
      setLikedItems(updatedLikedItems);

    }
  }

  return (
    <AppContext.Provider value={{ likedItems, handleLikeToggle, deleteLikedItem }}>
      {children}
    </AppContext.Provider>
  );
};

