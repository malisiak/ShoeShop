export const getShoeDetails = (id: number) => {
  return fetch(`http://localhost:3001/shoes/${id}`).then((response) => response.json());
};
