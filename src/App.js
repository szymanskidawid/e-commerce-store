import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/header-section/Header';
import ProductGrid from './components/main-section/ProductGrid';
import BasketGrid from './components/basket-section/BasketGrid';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  //Changes between Light and Dark mode.
  const [darkMode, setDarkMode] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/products');

      const dataJSON = await response.json();

      setData(dataJSON);
    };

    fetchData();
  }, []);

  const colorMode = () => {
    setDarkMode(!darkMode);
  };

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
          <Header
            colorMode={colorMode}
            darkMode={darkMode}
            basketItems={Object.keys(basket).length}
            basketTotal={totalPrice()}
          />
          <ProductGrid darkMode={darkMode} data={data} basket={basket} addToBasket={addToBasket} />
          <Footer darkMode={darkMode} />
        </>
      ),
    },

    {
      path: '/basket',
      element: (
        <>
          <Header
            colorMode={colorMode}
            darkMode={darkMode}
            basketItems={Object.keys(basket).length}
            basketTotal={totalPrice()}
          />
          <BasketGrid
            basketTotal={totalPrice()}
            darkMode={darkMode}
            data={data}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
            basket={basket}
            setBasket={setBasket}
            isBasketEmpty={isBasketEmpty}
            setIsBasketEmpty={setIsBasketEmpty}
            deleteProductFromBasket={deleteProductFromBasket}
          />
          <Footer darkMode={darkMode} />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
