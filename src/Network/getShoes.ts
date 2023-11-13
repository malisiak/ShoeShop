export const getShoes = () => {
  console.log("pobieram dane");
  return fetch("http://localhost:3001/shoes").then((response) => response.json());
};
