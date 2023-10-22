import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveButton from '../buttons/RemoveButton';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';

const BasketProduct = ({ _id, name, quantity, stock, price }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { basket, setBasket } = useContext(BasketContext);
  const { data } = useContext(DataContext);

  const totalPrice = price * quantity;

  const decrementQuantity = (_id) => {
    const newBasket = { ...basket };
    if (newBasket[_id] > 1) {
      setBasket({ ...newBasket, [_id]: newBasket[_id] - 1 });
    }
  };

  const incrementQuantity = (_id) => {
    const newBasket = { ...basket };
    if (newBasket[_id] < data.find((item) => item._id === _id).stock) {
      setBasket({ ...newBasket, [_id]: newBasket[_id] + 1 });
    }
  };

  const deleteProductFromBasket = (_id) => {
    const newBasket = { ...basket };
    delete newBasket[_id];
    setBasket(newBasket);
  };

  return (
    <div
      className={`basket-product-container ${
        darkMode ? 'basket-product-container-dark-theme' : 'basket-product-container-light-theme'
      }`}
    >
      <div className="basket-product-picture">
        <img src="https://picsum.photos/150/62" />
      </div>
      <div className="basket-product-info">
        <div>
          <div>{name}</div>
          <div className="basket-product-stock" style={{ color: quantity === stock ? 'red' : 'green' }}>
            In stock: {stock}
          </div>
        </div>
        <div className="basket-product-quantity-container">
          <RemoveCircleOutlineIcon
            className="basket-product-quantity-buttons"
            style={{ color: quantity === 1 && 'gray' }}
            onClick={() => decrementQuantity(_id)}
          />
          <div className="basket-product-quantity-number">{quantity}</div>
          <AddCircleOutlineIcon
            className="basket-product-quantity-buttons"
            style={{ color: quantity === stock && 'gray' }}
            onClick={() => incrementQuantity(_id)}
          />
        </div>
        <div>{totalPrice.toFixed(2)} zł</div>
      </div>
      <div className="basket-product-remove-container">
        <RemoveButton deleteProductFromBasket={() => deleteProductFromBasket(_id)} />
      </div>
    </div>
  );
};

export default BasketProduct;
