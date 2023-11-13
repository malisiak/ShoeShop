import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "../../Components/PageLayout/PageLayout";
import { ShoeCard } from "../../Components/ShoeCard/ShoeCard";
import { useFavoriteShoesContext } from "../../Context/FavoriteShoesContext/useFavoriteShoesContext";
import { getShoes } from "../../Network/getShoes";
import { Shoe } from "../../types";
import * as S from "./ShoeList.styled";

export const ShoeList = () => {
  const { isLoading, isError, isSuccess, data, error } = useQuery<Shoe[]>({
    queryKey: ["getShoes"],
    queryFn: getShoes
  });
  const { favoriteShoes, addOrRemoveFromFavorite } = useFavoriteShoesContext();

  if (isError) {
    console.error(error);
  }

  return (
    <PageLayout>
      <S.Container>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error</span>}
        {isSuccess && (
          <S.ShoeContainer>
            {data.map((shoe) => {
              const isFavoriteShoes = favoriteShoes.some(
                (favoriteShoe) => favoriteShoe.id === shoe.id
              );

              return (
                <ShoeCard
                  key={shoe.id}
                  shoe={shoe}
                  addOrRemoveFromFavorite={addOrRemoveFromFavorite}
                  isFavoriteShoes={isFavoriteShoes}
                />
              );
            })}
          </S.ShoeContainer>
        )}
      </S.Container>
    </PageLayout>
  );
};
