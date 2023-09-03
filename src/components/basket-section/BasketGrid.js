import { useState } from "react";
import MainButton from "../buttons/MainButton";
import BasketProduct from "./BasketProduct";

const BasketGrid = ({ basketTotal, darkMode }) => {
  const [isBasketEmpty, setIsBasketEmpty] = useState(true);

  return (
    <section >
      {/* Ternary operator to change between light and dark mode classes. */}
      <div className={`scrolling-window ${darkMode
      ? 'scrolling-window-dark-theme'
      : 'scrolling-window-light-theme'}`}>
        {isBasketEmpty === true ? 
          <div className="basket-empty">
            Basket is Empty
          </div> :
          <div className='basket-scrolling-container'>
            <BasketProduct darkMode={darkMode} />
            <BasketProduct darkMode={darkMode} />
            <BasketProduct darkMode={darkMode} />
            <BasketProduct darkMode={darkMode} />
            <BasketProduct darkMode={darkMode} />
            <BasketProduct darkMode={darkMode} />
          </div>
        }
      </div>
      <div className="basket-bottom-container">
        <div className="basket-bottom-price">
          Total: {basketTotal} zł
        </div>
        <MainButton className={"basket-section-purchase-button"}
        color={'success'} 
        text={'Purchase'}/>
      </div>
    </section>
  );
}

export default BasketGrid;