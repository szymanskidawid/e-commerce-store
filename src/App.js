import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/header-section/Header";
import ProductGrid from "./components/main-section/ProductGrid";
import BasketGrid from "./components/basket-section/BasketGrid";

function App() {
  //Changes between Light and Dark mode.

  const [darkMode, setDarkMode] = useState(false)

  const colorMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('body-dark-theme')
    }
    else {
      document.body.classList.remove('body-dark-theme')
    }

    return () => {
      document.body.classList.remove('body-dark-theme');
    };
  }, [darkMode]);

  //Below displays the basket.
  const [checkoutMode, setCheckoutMode] = useState(false)

  const toggleCheckout = () => {
    console.log("Checkout button clicked")
    setCheckoutMode(!checkoutMode)
  }

  return (
    <div className="App">
      <Header toggleCheckout={toggleCheckout}
      colorMode={colorMode}
      darkMode={darkMode} />
      {checkoutMode ? <BasketGrid basketTotal="50.00" darkMode={darkMode} /> 
      : <ProductGrid darkMode={darkMode} />}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
