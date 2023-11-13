import { ReactNode } from "react";
import { useBasketState } from "../../Hooks/useBasketState";
import { BasketContext } from "./BasketContex";

export const BasketContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const basketState = useBasketState();

  return (
    <BasketContext.Provider value={basketState}>
      {children}
    </BasketContext.Provider>
  );
};
