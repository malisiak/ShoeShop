import { createContext } from "react";
import { useBasketState } from "../../Hooks/useBasketState";

export const BasketContext = createContext<ReturnType<
  typeof useBasketState
> | null>(null);
