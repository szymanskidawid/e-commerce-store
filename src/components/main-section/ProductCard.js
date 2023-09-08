import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import { Alert } from '@mui/material';

const ProductCard = ({ darkMode, name, price, stock, addToBasket }) => {
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  const handleAddToBasket = () => {
    addToBasket();
    setIsAddedToBasket(true);

    setTimeout(() => {
      setIsAddedToBasket(false);
    }, 2000);
  };

  return (
    //Ternary operator to change between light and dark mode classes.
    <div
      className={`product-card-container ${
        darkMode ? 'product-card-container-dark-theme' : 'product-card-container-light-theme'
      }`}
    >
      <div className="product-card-name">{name}</div>
      <div className="product-card-picture">
        <img src="https://picsum.photos/300/125" />
      </div>
      <div className="product-card-bottom">
        <div className="product-card-price">{price.toFixed(2)}</div>
        {stock > 0 ? (
          <MainButton
            className={'product-section-add-button'}
            color={'success'}
            text={'Add to Cart'}
            onClick={handleAddToBasket}
          />
        ) : (
          <div className="product-card-out-of-stock">OUT OF STOCK</div>
        )}
        {isAddedToBasket && (
          <Alert className="product-card-purchase-successful" severity="success">
            Added
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
