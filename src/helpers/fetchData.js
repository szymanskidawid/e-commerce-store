export const fetchData = async (setData) => {
  //const response = await fetch('http://localhost:4000');
  const response = await fetch('https://e-commerce-store-backend.onrender.com');

  const dataJSON = await response.json();

  setData(dataJSON);
};
