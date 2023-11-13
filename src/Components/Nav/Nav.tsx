import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { Shoe } from "../../types";
import * as S from "./Nav.styled";

interface Props {
  favoriteShoes?: Pick<Shoe, "id">[];
  numberOfShoesInBasket: number;
}

export const Nav = ({ favoriteShoes, numberOfShoesInBasket }: Props) => {
  const navigate = useNavigate();
  const goToBasketPage = () => {
    if (numberOfShoesInBasket > 0) {
      navigate("/basket");
    }
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Name onClick={goHome}>INTERNETOWY SKLEP OBUWNICZY</S.Name>
      <S.IconsContainer>
        <FontAwesomeIcon icon={faHeart} size="xl" />
        <S.NumberContainer rightValue="8px">
          {favoriteShoes?.length}
        </S.NumberContainer>
        <FontAwesomeIcon
          onClick={goToBasketPage}
          icon={faCartShopping}
          size="xl"
          style={{ cursor: numberOfShoesInBasket > 0 ? "pointer" : "default" }}
        />
        <S.NumberContainer rightValue="2px">
          {numberOfShoesInBasket}
        </S.NumberContainer>
      </S.IconsContainer>
    </S.Container>
  );
};
