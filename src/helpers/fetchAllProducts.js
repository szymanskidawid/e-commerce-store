export const fetchAllProducts = async (setAllProducts) => {
  const allProductsRes = await fetch('https://e-commerce-store-backend.onrender.com');

  const allProducts = await allProductsRes.json();

  setAllProducts(allProducts);
};
