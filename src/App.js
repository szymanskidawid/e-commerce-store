import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header-section/Header";
import ProductGrid from "./components/main-section/ProductGrid";
import BasketGrid from "./components/basket-section/BasketGrid";

function App() {
  //Below displays the basket.
  const [checkoutMode, setCheckoutMode] = useState(false)

  const toggleCheckout = () => {
    console.log("Checkout button clicked");
    setCheckoutMode(!checkoutMode);
  }

  return (
    <div className="App">
      <Header toggleCheckout={toggleCheckout} />
      {checkoutMode ? <BasketGrid /> : <ProductGrid />}
      <Footer />
    </div>
  );
}

export default App;
