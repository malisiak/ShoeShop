import { useMemo, useState } from "react";
import { BasketProducts, Shoe } from "../../types";

export const useBasketState = () => {
  const [basketProducts, setBasketProducts] = useState<BasketProducts[]>([]);

  const addProductToBasket = (shoe: Shoe, chosenSize: number) => {
    basketProducts.length === 0
      ? setBasketProducts([
          { shoe: shoe, orderDetails: [{ size: chosenSize, quantity: 1 }] }
        ])
      : addProductToBasketWhenisNotEmpty(shoe, chosenSize);
  };

  const addProductToBasketWhenisNotEmpty = (shoe: Shoe, chosenSize: number) => {
    const existedProduct = basketProducts.find((o) => o.shoe.id === shoe.id);
    existedProduct
      ? addProductToBasketWhenProductExists(shoe, chosenSize)
      : setBasketProducts((prev) => [
          ...prev,
          { shoe: shoe, orderDetails: [{ size: chosenSize, quantity: 1 }] }
        ]);
  };

  const addProductToBasketWhenProductExists = (
    shoe: Shoe,
    chosenSize: number
  ) => {
    const newBasketProductsState = basketProducts.map((o) => {
      if (o.shoe.id === shoe.id) {
        const sameSize = o.orderDetails.find((x) => x.size === chosenSize);
        const obj = sameSize
          ? {
              ...o,
              orderDetails: o.orderDetails.map((x) => {
                return x.size === chosenSize
                  ? { size: x.size, quantity: x.quantity + 1 }
                  : x;
              })
            }
          : {
              shoe,
              orderDetails: [
                ...o.orderDetails,
                { size: chosenSize, quantity: 1 }
              ]
            };
        return obj;
      } else return o;
    });
    setBasketProducts(newBasketProductsState);
  };

  const numberOfShoesInBasket = useMemo(() => {
    if (basketProducts.length === 0) {
      return 0;
    }

    let sum = 0;
    basketProducts.forEach((shoe) => {
      shoe.orderDetails.forEach((orderDetails) => {
        sum = sum + orderDetails.quantity;
      });
    });
    return sum;
  }, [basketProducts]);

  const clearBasketAfterBuying = () => {
    setBasketProducts([]);
  };

  return {
    basketProducts: basketProducts,
    addProductToBasket: addProductToBasket,
    numberOfShoesInBasket: numberOfShoesInBasket,
    clearBasketAfterBuying: clearBasketAfterBuying
  };
};
