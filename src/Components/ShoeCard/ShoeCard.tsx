import { Shoe } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import * as S from "./ShoeCard.styled";

interface Props {
  shoe: Shoe;
  addOrRemoveFromFavorite: (
    event: React.FormEvent<EventTarget>,
    id: number
  ) => void;
  isFavoriteShoes?: boolean;
}

const heartIcon = <FontAwesomeIcon icon={faHeart} size="xl" />;
const filledHeartIcon = <FontAwesomeIcon icon={filledHeart} size="xl" />;

export const ShoeCard = ({
  shoe,
  addOrRemoveFromFavorite,
  isFavoriteShoes
}: Props) => {
  const navigate = useNavigate();
  const goToDetailsPage = (shoeId: number) => {
    navigate(`shoes/${shoeId}`);
  };

  return (
    <S.Container onClick={() => goToDetailsPage(shoe.id)}>
      <S.IconNav>
        <S.ButtonIcon onClick={(e) => addOrRemoveFromFavorite(e, shoe.id)}>
          {isFavoriteShoes ? filledHeartIcon : heartIcon}
        </S.ButtonIcon>
      </S.IconNav>
      <img src={shoe.imageUrl} alt="shoe" />
      <S.FirstLine>{shoe.brand}</S.FirstLine>
      <S.SecondLine>{shoe.price} zł</S.SecondLine>
    </S.Container>
  );
};
