import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import BasketProduct from './BasketProduct';
import { Alert } from '@mui/material';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';
import { fetchAllProducts } from '../../helpers/fetchAllProducts';

const BasketGrid = ({ basketTotalPrice }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { basket, setBasket } = useContext(BasketContext);
  const { allProducts, setAllProducts } = useContext(DataContext);

  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const reduceStock = (product, quantityInBasket) => {
    return fetch(`https://e-commerce-store-backend.onrender.com/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...product,
        stock: product.stock - quantityInBasket,
      }),
    });
  };

  const purchaseProducts = async () => {
    if (Object.keys(basket).length > 0) {
      const basketItems = Object.keys(basket);

      const basketItemsInAllProducts = basketItems.map((basketItemId) => {
        return allProducts.find((item) => item._id === basketItemId);
      });

      const quantitiesOfBasketItems = basketItems.map((basketItemId) => {
        return basket[basketItemId];
      });

      await Promise.all(
        basketItemsInAllProducts.map((product, i) => {
          return reduceStock(product, quantitiesOfBasketItems[i]);
        })
      );

      setIsPurchaseComplete(true);
      setBasket({});

      fetchAllProducts(setAllProducts);

      setTimeout(() => {
        setIsPurchaseComplete(false);
      }, 2000);
    }
  };

  const checkIfBasketIsEmpty = () => {
    return Object.keys(basket).length === 0;
  };

  return (
    <main className="basket-section-container">
      <section className={`scrolling-window scrolling-window-${darkMode ? 'dark' : 'light'}-theme`}>
        {checkIfBasketIsEmpty() ? (
          <div className="basket-empty">Basket is Empty</div>
        ) : (
          <div className="basket-scrolling-container">
            {Object.keys(basket).map((_id) => (
              <BasketProduct
                _id={_id}
                key={_id}
                name={allProducts.find((item) => item._id === _id).name}
                quantity={basket[_id]}
                stock={allProducts.find((item) => item._id === _id).stock}
                price={allProducts.find((item) => item._id === _id).price}
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
