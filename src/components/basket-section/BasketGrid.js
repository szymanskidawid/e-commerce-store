// Container displaying items added to the basket.

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
        <div className="basket-bottom-buy-button">
          Buy
        </div>
      </div>
    </section>
  );
}

export default BasketGrid;
