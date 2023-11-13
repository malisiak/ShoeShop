import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

export const PhotosContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
`;

export const Photo = styled.img`
  max-width: 500px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 40px;
`;

export const Brand = styled.div`
  color: #222222;
  font-size: 23px;
  text-decoration: underline;
  padding: 40px 0px 20px;
`;

export const Price = styled.div`
  color: #e34758;
  font-size: 33px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Sizes = styled.div`
  display: flex;
  max-width: 50%;
  flex-wrap: wrap;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const SizeButton = styled.button`
  width: 80px;
  margin: 0px 20px 10px 0;
`;

export const AddToBusketButton = styled.button<{ canBuy: Boolean }>`
  background-color: #f28500;
  width: 250px;
  height: 50px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #f28500;
  cursor: ${(props) => (props.canBuy ? "pointer" : "not-allowed")};
`;

export const Margin = styled.div<{ space: string }>`
  padding: ${(props) => props.space};
`;
