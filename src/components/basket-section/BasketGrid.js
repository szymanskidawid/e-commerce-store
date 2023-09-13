import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import BasketProduct from './BasketProduct';
import { Alert } from '@mui/material';

const BasketGrid = ({
  basketTotal,
  darkMode,
  data,
  decrementQuantity,
  incrementQuantity,
  basket,
  setBasket,
  isBasketEmpty,
  setIsBasketEmpty,
  deleteProductFromBasket,
  reduceStock,
}) => {
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const purchaseProducts = () => {
    if (!isBasketEmpty) {
      Object.keys(basket).forEach((basketItemId) => {
        const product = data.find((item) => item.id === basketItemId);
        const quantity = basket[basketItemId];

        reduceStock(product, quantity);
      });

      setIsPurchaseComplete(true);
      setIsBasketEmpty(true);
      setBasket([]);

      setTimeout(() => {
        setIsPurchaseComplete(false);
      }, 2000);
    }
  };

  return (
    <section>
      {/* Ternary operator to change between light and dark mode classes. */}
      <div className={`scrolling-window ${darkMode ? 'scrolling-window-dark-theme' : 'scrolling-window-light-theme'}`}>
        {isBasketEmpty ? (
          <div className="basket-empty">Basket is Empty</div>
        ) : (
          <div className="basket-scrolling-container">
            {Object.keys(basket).map((id) => (
              <BasketProduct
                darkMode={darkMode}
                id={id}
                key={id}
                name={data.find((item) => item.id === id).name}
                quantity={basket[id]}
                stock={data.find((item) => item.id === id).stock}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
                price={data.find((item) => item.id === id).price}
                deleteProductFromBasket={() => deleteProductFromBasket(id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="basket-bottom-container">
        <div className="basket-bottom-price">Total: {basketTotal} zł</div>
        <MainButton
          className={'basket-section-purchase-button'}
          color={'success'}
          text={'Purchase'}
          onClick={purchaseProducts}
        />
        {isPurchaseComplete && <Alert severity="success">Purchase successful!</Alert>}
      </div>
    </section>
  );
};

export default BasketGrid;
