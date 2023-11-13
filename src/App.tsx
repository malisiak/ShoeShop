import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Basket } from "./Pages/Basket/Basket";
import { BasketContextProvider } from "./Context/BasketContext/BasketProvider";
import { FavoriteShoesContextProvider } from "./Context/FavoriteShoesContext/FavoriteShoesProvider";
import { ErrorPage } from "./Pages/ErrorPage";
import "./index.css";
import { ShoeList } from "./Pages/ShoeList/ShoeList";
import { ShoeDetails } from "./Pages/ShoeDetails/ShoeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShoeList />,
    errorElement: <ErrorPage />
  },
  {
    path: "shoes/:shoeId",
    element: <ShoeDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "/basket",
    element: <Basket />,
    errorElement: <ErrorPage />
  }
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 60000 } }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteShoesContextProvider>
        <BasketContextProvider>
          <RouterProvider router={router} />
        </BasketContextProvider>
      </FavoriteShoesContextProvider>
    </QueryClientProvider>
  );
}

export default App;
