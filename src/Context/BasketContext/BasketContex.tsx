import { createContext } from "react";
import { useBasketState } from "../../Hooks/BasketState/useBasketState";

export const BasketContext = createContext<ReturnType<
  typeof useBasketState
> | null>(null);
