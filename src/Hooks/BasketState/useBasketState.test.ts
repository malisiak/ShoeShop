import { act, renderHook, waitFor } from "@testing-library/react";
import { useBasketState } from "./useBasketState";

const shoe1 = {
  id: 1,
  brand: "Socki",
  sizes: [40, 41],
  price: 300,
  sale: false,
  imageUrl: ""
};

const shoe2 = {
  id: 2,
  brand: "Socki",
  sizes: [39, 40, 41],
  price: 200,
  sale: false,
  imageUrl: ""
};
test("basketProducts is empty at the begining", () => {
  const { result } = renderHook(() => useBasketState());
  expect(result.current.basketProducts).toEqual([]);
});

test("adds 4 shoes to the basket - basketProducts contains them, the numberOfShoes is a correct number", async () => {
  const { result } = renderHook(() => useBasketState());

  act(() => result.current.addProductToBasket(shoe1, 40));
  act(() => result.current.addProductToBasket(shoe1, 40));
  act(() => result.current.addProductToBasket(shoe1, 41));
  act(() => result.current.addProductToBasket(shoe2, 38));

  await waitFor(() =>
    expect(result.current.basketProducts).toEqual(
      expect.arrayContaining([
        {
          shoe: shoe1,
          orderDetails: [
            { size: 40, quantity: 2 },
            { size: 41, quantity: 1 }
          ]
        },
        { shoe: shoe2, orderDetails: [{ size: 38, quantity: 1 }] }
      ])
    )
  );
  expect(result.current.basketProducts.length).toBe(2);
  expect(result.current.numberOfShoesInBasket).toBe(4);
});

test("ClearBasketAfterBuying method set basketProduct to empty array", async () => {
  const { result } = renderHook(() => useBasketState());

  act(() => result.current.addProductToBasket(shoe1, 40));
  act(() => result.current.addProductToBasket(shoe2, 40));
  await waitFor(() => expect(result.current.basketProducts.length).toEqual(2));

  act(() => result.current.clearBasketAfterBuying());
  await waitFor(() => expect(result.current.basketProducts).toEqual([]));
});
