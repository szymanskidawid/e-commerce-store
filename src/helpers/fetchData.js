export const fetchData = async (setData) => {
  const response = await fetch('https://e-commerce-store-backend.onrender.com/products');

  const dataJSON = await response.json();

  setData(dataJSON.products);
};
