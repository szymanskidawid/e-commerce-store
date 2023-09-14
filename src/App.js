import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/header-section/Header';
import ProductGrid from './components/main-section/ProductGrid';
import BasketGrid from './components/basket-section/BasketGrid';
import ContextProviders from './contexts/ContextProviders';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchData } from './helpers/fetchData';

function App() {
  //Changes between Light and Dark mode.
  const [darkMode, setDarkMode] = useState(false);

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

  const [data, setData] = useState(null);

  //Data fetch call
  useEffect(() => {
    fetchData(setData);
  }, []);

  //Below displays the basket.
  const [basket, setBasket] = useState({});

  const [isBasketEmpty, setIsBasketEmpty] = useState(true);

  //Basket functionalities
  const addToBasket = (product) => {
    const newBasket = { ...basket };

    if (newBasket[product.id] >= 1) {
      setBasket({ ...newBasket, [product.id]: newBasket[product.id] + 1 });
    } else {
      setBasket({ ...newBasket, [product.id]: 1 });
    }

    setIsBasketEmpty(false);
  };

  const decrementQuantity = (id) => {
    const newBasket = { ...basket };
    if (newBasket[id] > 1) {
      setBasket({ ...newBasket, [id]: newBasket[id] - 1 });
    }
  };

  const incrementQuantity = (id) => {
    const newBasket = { ...basket };
    if (newBasket[id] < data.find((item) => item.id === id).stock) {
      setBasket({ ...newBasket, [id]: newBasket[id] + 1 });
    }
  };

  const deleteProductFromBasket = (id) => {
    const newBasket = { ...basket };
    delete newBasket[id];
    setBasket(newBasket);
    if (Object.keys(newBasket).length === 0) {
      setIsBasketEmpty(true);
    }
  };

  const reduceStock = (product, quantity) => {
    return fetch(`http://localhost:4000/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...product,
        stock: product.stock - quantity,
      }),
    });
  };

  //Other
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
        <>
          <Header basketItemsAmount={Object.keys(basket).length} basketTotalPrice={totalPrice()} />
          <ProductGrid addToBasket={addToBasket} />
          <Footer />
        </>
      ),
    },

    {
      path: '/basket',
      element: (
        <>
          <Header basketItemsAmount={Object.keys(basket).length} basketTotalPrice={totalPrice()} />
          <BasketGrid
            basketTotalPrice={totalPrice()}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
            isBasketEmpty={isBasketEmpty}
            setIsBasketEmpty={setIsBasketEmpty}
            deleteProductFromBasket={deleteProductFromBasket}
            reduceStock={reduceStock}
          />
          <Footer />
        </>
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
