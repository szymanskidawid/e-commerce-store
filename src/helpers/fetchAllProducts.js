export const fetchAllProducts = async (setAllProducts) => {
  //const response = await fetch('http://localhost:4000');
  const allProductsRes = await fetch('https://e-commerce-store-backend.onrender.com');

  const allProducts = await allProductsRes.json();

  setAllProducts(allProducts);
};
