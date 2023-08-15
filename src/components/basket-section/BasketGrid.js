// Container displaying items added to the basket.

import MainButton from "../buttons/MainButton";
import BasketProduct from "./BasketProduct";

const BasketGrid = () => {
  return (
    <section >
      <div className='scrolling-window'>
        <div className='basket-scrolling-container'>
          <BasketProduct />
          <BasketProduct />
          <BasketProduct />
          <BasketProduct />
          <BasketProduct />
          <BasketProduct />
        </div>
      </div>
      <div className="basket-bottom-container">
        <div className="basket-bottom-price">
          Price
        </div>
        <MainButton className={"basket-section-purchase-button"}
        color={'success'} 
        text={'Purchase'}/>
      </div>
    </section>
  );
}

export default BasketGrid;
