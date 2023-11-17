import { createContext } from "react";
import { useFavoriteShoesState } from "../../Hooks/FavoriteShoesState/useFavoriteShoesState";

export const FavoriteShoesContext = createContext<ReturnType<
  typeof useFavoriteShoesState
> | null>(null);
