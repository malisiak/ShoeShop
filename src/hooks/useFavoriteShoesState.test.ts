import { act, renderHook, waitFor } from "@testing-library/react";
import { FormEvent } from "react";
import { useFavoriteShoesState } from "./useFavoriteShoesState";

const mockButtonEvent = { stopPropagation: () => {} } as FormEvent<EventTarget>;

test("favoriteShoes state is empty at the beginning", () => {
  const { result } = renderHook(() => useFavoriteShoesState());
  expect(result.current.favoriteShoes).toEqual([]);
});

test("addToRemoveFromFavorite method adds a shoe id to the state if it wasn't there before", async () => {
  const { result } = renderHook(() => useFavoriteShoesState());

  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 1));

  await waitFor(() =>
    expect(result.current.favoriteShoes).toEqual([{ id: 1 }])
  );
});

test("addToRemoveFromFavorite method removes shoe from FavoriteShoes state when the product is there", async () => {
  const { result } = renderHook(() => useFavoriteShoesState());

  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 1));
  await waitFor(() =>
    expect(result.current.favoriteShoes).toEqual([{ id: 1 }])
  );
  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 1));

  await waitFor(() => expect(result.current.favoriteShoes).toEqual([]));
});

test("addToRemoveFromFavorite method removes shoe from FavoriteShoes when there is more products in the state", async () => {
  const { result } = renderHook(() => useFavoriteShoesState());

  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 1));
  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 2));
  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 3));
  await waitFor(() =>
    expect(result.current.favoriteShoes).toEqual(
      expect.arrayContaining([{ id: 1 }, { id: 2 }, { id: 3 }])
    )
  );

  act(() => result.current.addOrRemoveFromFavorite(mockButtonEvent, 2));
  await waitFor(() =>
    expect(result.current.favoriteShoes).toEqual(
      expect.arrayContaining([{ id: 1 }, { id: 3 }])
    )
  );
});
