import { ReactNode } from "react";
import { useBasketContext } from "../../Context/BasketContext/useBasketContext";
import { useFavoriteShoesContext } from "../../Context/FavoriteShoesContext/useFavoriteShoesContext";
import { Nav } from "../Nav/Nav";
import * as S from "./PageLayout.styled";

interface Props {
  children: ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  const { favoriteShoes } = useFavoriteShoesContext();
  const { numberOfShoesInBasket } = useBasketContext();

  return (
    <S.Page>
      <Nav
        favoriteShoes={favoriteShoes}
        numberOfShoesInBasket={numberOfShoesInBasket}
      />
      <S.PageContentContainer>{children}</S.PageContentContainer>
    </S.Page>
  );
};
