import React, { useState, useEffect } from 'react';
import ProductGrid from './components/main-section/ProductGrid';
import BasketGrid from './components/basket-section/BasketGrid';
import ContextProviders from './contexts/ContextProviders';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchData } from './helpers/fetchData';
import Page from './components/Page';

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

  const router = createBrowserRouter([
    {
      path: '/products',
      element: (
        <Page basket={basket} totalPrice={totalPrice}>
          <ProductGrid />
        </Page>
      ),
    },

    {
      path: '/basket',
      element: (
        <Page basket={basket} totalPrice={totalPrice}>
          <BasketGrid basketTotalPrice={totalPrice()} />
        </Page>
      ),
    },
  ]);

  return (
    <div className="App">
      <ContextProviders {...{ darkMode, setDarkMode, basket, setBasket, data, setData }}>
        <RouterProvider router={router} />
      </ContextProviders>
    </div>
  );
}

export default App;
