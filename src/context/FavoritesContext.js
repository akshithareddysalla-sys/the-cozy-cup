import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("cozyCupFavorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((favorite) => favorite.id === item.id);

      const updatedFavorites = exists
        ? prev.filter((favorite) => favorite.id !== item.id)
        : [...prev, item];

      localStorage.setItem(
        "cozyCupFavorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.filter(
        (item) => item.id !== id
      );

      localStorage.setItem(
        "cozyCupFavorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  const clearFavorites = () => {
    localStorage.removeItem("cozyCupFavorites");
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);