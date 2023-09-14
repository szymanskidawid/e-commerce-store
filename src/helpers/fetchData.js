export const fetchData = async (setData) => {
  const response = await fetch('http://localhost:4000/products');

  const dataJSON = await response.json();

  setData(dataJSON);
};
