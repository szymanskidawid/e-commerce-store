import { useState } from 'react';
import MainButton from '../buttons/MainButton';
import { Alert } from '@mui/material';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const ProductCard = ({ name, price, stock, isInBasket, addToBasket }) => {
  const { darkMode } = useContext(DarkModeContext);

  const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  const handleAddToBasket = () => {
    addToBasket();
    setIsAddedToBasket(true);

    setTimeout(() => {
      setIsAddedToBasket(false);
    }, 2000);
  };

  return (
    <div className={`product-card-container product-card-container-${darkMode ? 'dark' : 'light'}-theme`}>
      <div className="product-card-name">{name}</div>
      <div className="product-card-picture">
        <img src={`../images/${name}.jpg`} alt={name} />
      </div>
      <div className="product-card-bottom">
        <div className="product-card-price">{price.toFixed(2)} zł</div>
        {stock > 0 ? (
          isInBasket ? (
            <div className="product-card-in-basket">IN BASKET</div>
          ) : (
            <MainButton
              className={'product-section-add-button'}
              color={'success'}
              text={'Add to Basket'}
              onClick={handleAddToBasket}
            />
          )
        ) : (
          <div className="product-card-out-of-stock">OUT OF STOCK</div>
        )}
        {isAddedToBasket && (
          <Alert className="product-card-added-to-basket-popup" severity="success">
            Added
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
