import { ReactNode } from "react";
import { useFavoriteShoesState } from "../../Hooks/FavoriteShoesState/useFavoriteShoesState";
import { FavoriteShoesContext } from "./FavoriteShoesContext";

export const FavoriteShoesContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const favoriteShoesState = useFavoriteShoesState();

  return (
    <FavoriteShoesContext.Provider value={favoriteShoesState}>
      {children}
    </FavoriteShoesContext.Provider>
  );
};
