import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/header-section/Header';
import ProductGrid from './components/main-section/ProductGrid';
import BasketGrid from './components/basket-section/BasketGrid';

function App() {
  //Changes between Light and Dark mode.
  const [darkMode, setDarkMode] = useState(false);

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
  const [checkoutMode, setCheckoutMode] = useState(false);

  const toggleCheckout = () => {
    setCheckoutMode(!checkoutMode);
  };

  const [basket, setBasket] = useState([]);

  const [isBasketEmpty, setIsBasketEmpty] = useState(true);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
    setIsBasketEmpty(false);
  };

  const deleteProductFromBasket = (productId) => {
    const updatedBasket = basket.filter((product) => product.id !== productId);
    setBasket(updatedBasket);
    if (updatedBasket.length === 0) {
      setIsBasketEmpty(true);
    }
  };

  const totalPrice = () => {
    let price = 0;

    basket.forEach((product) => {
      price = price + product.price;
    });

    return price;
  };

  return (
    <div className="App">
      <Header toggleCheckout={toggleCheckout} colorMode={colorMode} darkMode={darkMode} />
      {checkoutMode ? (
        <BasketGrid
          basketTotal={totalPrice()}
          darkMode={darkMode}
          basket={basket}
          setBasket={setBasket}
          isBasketEmpty={isBasketEmpty}
          setIsBasketEmpty={setIsBasketEmpty}
          deleteProductFromBasket={deleteProductFromBasket}
        />
      ) : (
        <ProductGrid darkMode={darkMode} addToBasket={addToBasket} />
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
