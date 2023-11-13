import { useContext } from "react";
import { FavoriteShoesContext } from "./FavoriteShoesContext";

export const useFavoriteShoesContext = () => {
  const contextValue = useContext(FavoriteShoesContext);

  if (!contextValue) {
    throw Error("FavoriteShoesContext must be used within provider");
  }

  return contextValue;
};
