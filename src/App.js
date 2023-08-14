import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import BasketGrid from "./components/BasketGrid";

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
