import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/header-section/Header';
import ProductGrid from './components/main-section/ProductGrid';
import BasketGrid from './components/basket-section/BasketGrid';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DarkModeContext } from './contexts/DarkModeContext';

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

  const reduceStock = (product, quantity) => {
    fetch(`http://localhost:4000/products/${product.id}`, {
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
          <Header basketItems={Object.keys(basket).length} basketTotal={totalPrice()} />
          <ProductGrid data={data} basket={basket} addToBasket={addToBasket} />
          <Footer />
        </>
      ),
    },

    {
      path: '/basket',
      element: (
        <>
          <Header basketItems={Object.keys(basket).length} basketTotal={totalPrice()} />
          <BasketGrid
            basketTotal={totalPrice()}
            data={data}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
            basket={basket}
            setBasket={setBasket}
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
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <RouterProvider router={router} />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
