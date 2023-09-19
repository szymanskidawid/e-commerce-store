import React, { useState, useEffect } from 'react';
import ContextProviders from './contexts/ContextProviders';
import { fetchData } from './helpers/fetchData';
import Router from './helpers/Router';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(null);
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
    fetchData(setData);
  }, []);

  const totalPrice = () => {
    let price = 0;
    Object.keys(basket).forEach((id) => {
      price += data.find((item) => item.id === id).price * basket[id];
    });
    return price.toFixed(2);
  };

  return (
    <div className="App">
      <ContextProviders {...{ darkMode, setDarkMode, basket, setBasket, data, setData }}>
        <Router totalPrice={totalPrice} />
      </ContextProviders>
    </div>
  );
}

export default App;
