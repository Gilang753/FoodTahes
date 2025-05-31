import React, { createContext, useState, useContext } from 'react';
const FavoriteContext = createContext();
export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (food) => {
    if (!favorites.some((item) => item.id === food.id)) {
    setFavorites((prev) => [...prev, food]);
  }
  };
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };
  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };
  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export const useFavorite = () => useContext(FavoriteContext);