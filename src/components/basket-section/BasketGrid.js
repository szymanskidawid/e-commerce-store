import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import BasketProduct from './BasketProduct';
import { Alert } from '@mui/material';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';
import { fetchData } from '../../helpers/fetchData';

const BasketGrid = ({ basketTotalPrice }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { basket, setBasket } = useContext(BasketContext);
  const { data, setData } = useContext(DataContext);

  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const reduceStock = (product, quantity) => {
    //return fetch(`http://localhost:4000/${product._id}`, {
    return fetch(`https://e-commerce-store-backend.onrender.com/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...product,
        stock: product.stock - quantity,
      }),
    });
  };

  const purchaseProducts = async () => {
    if (Object.keys(basket).length > 0) {
      const basketItems = Object.keys(basket);

      const products = basketItems.map((basketItemId) => {
        return data.find((item) => item._id === basketItemId);
      });

      const quantities = basketItems.map((basketItemId) => {
        return basket[basketItemId];
      });

      await Promise.all(
        products.map((product, i) => {
          return reduceStock(product, quantities[i]);
        })
      );

      setIsPurchaseComplete(true);
      setBasket({});

      fetchData(setData);

      setTimeout(() => {
        setIsPurchaseComplete(false);
      }, 2000);
    }
  };

  return (
    <main className="basket-section-container">
      <section
        className={`scrolling-window ${darkMode ? 'scrolling-window-dark-theme' : 'scrolling-window-light-theme'}`}
      >
        {Object.keys(basket).length === 0 ? (
          <div className="basket-empty">Basket is Empty</div>
        ) : (
          <div className="basket-scrolling-container">
            {Object.keys(basket).map((_id) => (
              <BasketProduct
                _id={_id}
                key={_id}
                name={data.find((item) => item._id === _id).name}
                quantity={basket[_id]}
                stock={data.find((item) => item._id === _id).stock}
                price={data.find((item) => item._id === _id).price}
              />
            ))}
          </div>
        )}
      </section>
      <div className="basket-bottom-container">
        <div className="basket-bottom-price">Total: {basketTotalPrice} zł</div>
        <MainButton
          className={'basket-section-purchase-button'}
          color={'success'}
          text={'Purchase'}
          onClick={purchaseProducts}
        />
        {isPurchaseComplete && <Alert severity="success">Purchase successful!</Alert>}
      </div>
    </main>
  );
};

export default BasketGrid;
