import { useState } from "react";
import MainButton from "../buttons/MainButton";
import BasketProduct from "./BasketProduct";
import { Alert } from "@mui/material";

const BasketGrid = ({ basketTotal, darkMode, basket, setBasket, isBasketEmpty, setIsBasketEmpty }) => {
  
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const purchaseProducts = () => {
    setIsPurchaseComplete(true);
    setIsBasketEmpty(true);
    setBasket([]);
  }

  return (
    <section >
      {/* Ternary operator to change between light and dark mode classes. */}
      <div className={`scrolling-window ${darkMode
      ? 'scrolling-window-dark-theme'
      : 'scrolling-window-light-theme'}`}>
        {isBasketEmpty 
          ? <div className="basket-empty">
            Basket is Empty
          </div> :
          <div className="basket-scrolling-container">
            {basket.map((product) => (
              <BasketProduct
                darkMode={darkMode}
                key={product.id}
                name={product.name}
                price={product.price}
              />
          ))}
          </div>
        }
      </div>
      <div className="basket-bottom-container">
        <div className="basket-bottom-price">
          Total: {basketTotal} zł
        </div>
        <MainButton className={"basket-section-purchase-button"}
        color={'success'} 
        text={'Purchase'}
        onClick={purchaseProducts}/>
        {isPurchaseComplete
          ? <Alert severity="success">Purchase successful!</Alert>
          : ""
        }
      </div>
    </section>
  );
}

export default BasketGrid;