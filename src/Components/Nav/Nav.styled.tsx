import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  width: 80%;
  flex-direction: column;
  position: fixed;
  top: 0;
  background-color: white;
`;

export const Name = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NumberContainer = styled.div<{ rightValue: string }>`
  position: relative;
  top: 10px;
  right: ${(props) => props.rightValue};
  color: black;
  padding: 2px;
`;
