import { useNavigate } from "react-router";
import { PageLayout } from "../../Components/PageLayout/PageLayout";
import { useBasketContext } from "../../Context/BasketContext/useBasketContext";
import { BasketProducts, Shoe } from "../../types";
import * as S from "./Basket.styled";
interface BasketViewEntry {
  size: number;
  quantity: number;
  shoe: Shoe;
}

const mapBasketProductToBasketViewEntry = (
  basketProduct: BasketProducts
): BasketViewEntry[] =>
  basketProduct.orderDetails.map((orderDetail) => ({
    shoe: basketProduct.shoe,
    quantity: orderDetail.quantity,
    size: orderDetail.size
  }));

const mapBasketProductsToBasketViewEntries = (
  basketProducts: BasketProducts[]
): BasketViewEntry[] =>
  basketProducts.flatMap(mapBasketProductToBasketViewEntry);

const countPrice = (basket: BasketViewEntry[]) => {
  return basket.reduce(
    (accumulator, o) => accumulator + o.quantity * o.shoe.price,
    0
  );
};
export const Basket = () => {
  const navigate = useNavigate();
  const { basketProducts, clearBasketAfterBuying } = useBasketContext();
  const basketToShow = mapBasketProductsToBasketViewEntries(basketProducts);

  const buyShoes = () => {
    clearBasketAfterBuying();
    navigate("/");
  };

  return (
    <PageLayout>
      <S.MainContainer>
        <S.Text>Koszyk</S.Text>
        <S.TableContainer>
          <S.Table>
            <thead>
              <tr style={{ border: "1px solid #D5C9C9" }}>
                <S.TdHead>Produkt</S.TdHead>
                <S.TdHead>Rozmiar</S.TdHead>
                <S.TdHead>Cena</S.TdHead>
                <S.TdHead>Ilość</S.TdHead>
                <S.TdHead>Kwota</S.TdHead>
              </tr>
            </thead>
            <tbody>
              {basketToShow &&
                basketToShow.length > 0 &&
                basketToShow.map((o) => {
                  return (
                    <tr>
                      <S.TdBody>
                        <S.ImageCell>
                          <S.Img src={o.shoe.imageUrl} alt="shoe" width={100} />
                          {o.shoe.brand}
                        </S.ImageCell>
                      </S.TdBody>
                      <S.TdBody>{o.size}</S.TdBody>
                      <S.TdBody>{o.shoe.price} zł</S.TdBody>
                      <S.TdBody>{o.quantity}</S.TdBody>
                      <S.TdBody>{o.shoe.price * o.quantity} zł</S.TdBody>
                    </tr>
                  );
                })}
            </tbody>
          </S.Table>
        </S.TableContainer>
        <S.SumContainer>
          <S.Text>Podsumowanie koszyka</S.Text>
          <S.Table>
            <tr>
              <S.SumTd>Kwota</S.SumTd>
              <S.SumTd>{countPrice(basketToShow)} zł</S.SumTd>
            </tr>
            <tr>
              <S.SumTd>Przesyłka</S.SumTd>
              <S.SumTd>Kurier - 15 zł</S.SumTd>
            </tr>
            <tr>
              <S.SumTd style={{ fontWeight: "bold" }}>Łącznie</S.SumTd>
              <S.SumTd style={{ fontWeight: "bold" }}>
                {countPrice(basketToShow) + 15} zł
              </S.SumTd>
            </tr>
          </S.Table>
          <S.ButtonBuy onClick={buyShoes}>Kupuję</S.ButtonBuy>
        </S.SumContainer>
      </S.MainContainer>
    </PageLayout>
  );
};
