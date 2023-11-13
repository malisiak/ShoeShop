import { useState } from "react";
import { Shoe } from "../types";

export const useFavoriteShoesState = () => {
  const [favoriteShoes, setFavoriteShoes] = useState<Pick<Shoe, "id">[]>([]);

  const addOrRemoveFromFavorite = (
    event: React.FormEvent<EventTarget>,
    shoeId: number
  ) => {
    event.stopPropagation();
    const isInFavList = favoriteShoes.find((o) => o.id === shoeId);
    isInFavList ? removeFromFavorite(shoeId) : addToFavorite(shoeId);
  };

  const removeFromFavorite = (shoeId: number) => {
    setFavoriteShoes((prev) => prev.filter((o) => o.id !== shoeId));
  };

  const addToFavorite = (shoeId: number) => {
    setFavoriteShoes((prev) => [{ id: shoeId }, ...prev]);
  };

  return {
    favoriteShoes: favoriteShoes,
    setFavoriteShoes: setFavoriteShoes,
    addOrRemoveFromFavorite: addOrRemoveFromFavorite
  };
};
