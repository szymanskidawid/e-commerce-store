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
        <div className="basket-info-container">

        </div>
      </div>
    </section>
  );
}

export default BasketGrid;
