import MainButton from "../buttons/MainButton";
import BasketProduct from "./BasketProduct";

const BasketGrid = ({ basketTotal, darkMode }) => {
  return (
    <section >
      {/* Ternary operator to change between light and dark mode classes. */}
      <div className={`scrolling-window ${darkMode
      ? 'scrolling-window-dark-theme'
      : 'scrolling-window-light-theme'}`}>
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