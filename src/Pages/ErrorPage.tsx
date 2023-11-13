import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const ErrorPage = () => {
  return (
    <Container>
      <div>Ups!</div>
      <div>
        Przepraszamy, pojawił się niespodziewany błąd. Być może został wpisany
        niewłaściwy adres strony!
      </div>
    </Container>
  );
};
