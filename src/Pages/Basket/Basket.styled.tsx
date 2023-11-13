import styled from "styled-components";

export const MainContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const TableContainer = styled.div`
  backgroundcolor: pink;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SumContainer = styled.div`
  align-self: flex-end;
  width: 35%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TdHead = styled.td`
  font-weight: bold;
  padding: 15px 5px;
  font-size: 20px;
  border: 1px solid #d5c9c9;
  text-align: center;
  font-size: 20px;
`;

export const TdBody = styled.td`
  font-size: 18px;
  border: 1px solid #d5c9c9;
  text-align: center;
  font-size: 20px;
`;

export const Text = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 25px;
`;

export const ButtonBuy = styled.div`
  background-color: #228b22;
  width: 200px;
  padding: 10px 5px;
  font-size: 25px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #228b22;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
`;

export const Img = styled.img`
  margin: 10px;
`;

export const SumTd = styled.td`
  font-size: 20px;
`;

export const ImageCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;
