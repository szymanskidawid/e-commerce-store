export const fetchData = async (setData) => {
  //const response = await fetch('https://e-commerce-store-backend.onrender.com/products');
  const response = await fetch('http://localhost:4000/products');

  const dataJSON = await response.json();

  setData(dataJSON.products);
};
