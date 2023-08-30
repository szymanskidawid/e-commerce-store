// Container displaying items added to the basket and allows option to remove/buy them.

import MainButton from "../buttons/MainButton";
import BasketProduct from "./BasketProduct";

const BasketGrid = ({ basketTotal, darkMode }) => {
  return (
    <section >
      {/* Tertiary operator to change between light and dark mode classes. */}
      <div className={darkMode
      ? 'scrolling-window scrolling-window-dark-theme'
      : 'scrolling-window scrolling-window-light-theme'}>
        <div className='basket-scrolling-container'>
          <BasketProduct darkMode={darkMode} />
          <BasketProduct darkMode={darkMode} />
          <BasketProduct darkMode={darkMode} />
          <BasketProduct darkMode={darkMode} />
          <BasketProduct darkMode={darkMode} />
          <BasketProduct darkMode={darkMode} />
        </div>
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
