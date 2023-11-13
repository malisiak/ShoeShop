import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border: solid 1px white;
  padding: 5px 0;
  margin-bottom: 30px;
  min-width: 150px;
`;

export const FirstLine = styled.div`
  font-style: italic;
`;
export const SecondLine = styled.div`
  font-weight: bold;
`;

export const IconNav = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: #f4f4f4;
  padding: 10px;
`;
