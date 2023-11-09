import React, { useState, useEffect } from 'react';
import ContextProviders from './contexts/ContextProviders';
import { fetchAllProducts } from './helpers/fetchAllProducts';
import Router from './helpers/Router';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allProducts, setAllProducts] = useState(null);
  const [basket, setBasket] = useState({});

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('body-dark-theme');
    } else {
      document.body.classList.remove('body-dark-theme');
    }

    return () => {
      document.body.classList.remove('body-dark-theme');
    };
  }, [darkMode]);

  useEffect(() => {
    fetchAllProducts(setAllProducts);
  }, []);

  const totalPrice = () => {
    let price = 0;
    Object.keys(basket).forEach((_id) => {
      price += allProducts.find((item) => item._id === _id).price * basket[_id];
    });
    return price.toFixed(2);
  };

  return (
    <div className="App">
      <ContextProviders {...{ darkMode, setDarkMode, basket, setBasket, allProducts, setAllProducts }}>
        <Router totalPrice={totalPrice} />
      </ContextProviders>
    </div>
  );
}

export default App;
