import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { useBasketContext } from "../../Context/BasketContext/useBasketContext";
import { getShoeDetails } from "../../Network/getShoeDetails";
import { PageLayout } from "../../Components/PageLayout/PageLayout";
import { Shoe } from "../../types";

import * as S from "./ShoeDetails.styled";

export const ShoeDetails = () => {
  const routerParams = useParams();
  const { isLoading, isError, isSuccess, data, error } = useQuery<Shoe>({
    queryKey: ["getShoeDetails"],
    queryFn: () => getShoeDetails(Number(routerParams.shoeId))
  });

  if (isError) {
    console.log("Error", error);
  }
  if (isLoading) {
    console.log("Loading", data);
  }

  const [isBuyButtonDisabled, setIsBuyButtonDisabled] =
    useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [buyButtonText, setBuyButtontext] = useState("Dodaj do koszyka");
  const { addProductToBasket } = useBasketContext();

  const onMouseEnterBuyButton = () => {
    if (selectedSize == null) {
      setBuyButtontext("Wybierz rozmiar!");
      setIsBuyButtonDisabled(true);
    }
  };

  const onMouseLeaveBasketButton = () => {
    setIsBuyButtonDisabled(false);
    setBuyButtontext("Dodaj do koszyka");
  };

  return (
    <PageLayout>
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
      {isSuccess && (
        <S.Container>
          <S.PhotosContainer>
            <S.Photo src={"/" + data.imageUrl} alt="shoe" />
          </S.PhotosContainer>
          <S.InfoContainer>
            <S.Brand>{data.brand}</S.Brand>
            <S.Price>{data.price} zł</S.Price>
            <S.Text>Dostępne rozmiary:</S.Text>
            <S.Margin space={"10px"} />
            <S.Sizes>
              {data.sizes.map((size: number) => {
                return (
                  <S.SizeButton onClick={() => setSelectedSize(size)}>
                    {size}
                  </S.SizeButton>
                );
              })}
            </S.Sizes>
            <S.Margin space={"20px"} />
            <S.AddToBusketButton
              disabled={isBuyButtonDisabled}
              onClick={() =>
                selectedSize && addProductToBasket(data, selectedSize)
              }
              onMouseEnter={onMouseEnterBuyButton}
              onMouseLeave={onMouseLeaveBasketButton}
              canBuy={Boolean(selectedSize)}
            >
              {buyButtonText}
            </S.AddToBusketButton>
          </S.InfoContainer>
        </S.Container>
      )}
    </PageLayout>
  );
};
