import { useContext } from "react";
import { BasketContext } from "./BasketContex";

export const useBasketContext = () => {
  const contextValue = useContext(BasketContext);
  if (!contextValue) {
    throw Error("BasketContext must be used within provider");
  }

  return contextValue;
};
