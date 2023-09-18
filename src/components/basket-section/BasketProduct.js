import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveButton from '../buttons/RemoveButton';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';

const BasketProduct = ({ id, name, quantity, stock, price }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { basket, setBasket } = useContext(BasketContext);
  const { data } = useContext(DataContext);

  const totalPrice = price * quantity;

  const decrementQuantity = (id) => {
    const newBasket = { ...basket };
    if (newBasket[id] > 1) {
      setBasket({ ...newBasket, [id]: newBasket[id] - 1 });
    }
  };

  const incrementQuantity = (id) => {
    const newBasket = { ...basket };
    if (newBasket[id] < data.find((item) => item.id === id).stock) {
      setBasket({ ...newBasket, [id]: newBasket[id] + 1 });
    }
  };

  const deleteProductFromBasket = (id) => {
    const newBasket = { ...basket };
    delete newBasket[id];
    setBasket(newBasket);
  };

  return (
    //Ternary operator to change between light and dark mode classes.
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
          <div className="basket-product-name">{name}</div>
          <div className="basket-product-stock" style={{ color: quantity === stock ? 'red' : 'green' }}>
            In stock: {stock}
          </div>
        </div>
        <div className="basket-product-quantity-container">
          <RemoveCircleOutlineIcon
            className="basket-product-quantity-buttons"
            style={{ color: quantity === 1 ? 'gray' : '' }}
            onClick={() => decrementQuantity(id)}
          />
          <p className="basket-product-quantity-number">{quantity}</p>
          <AddCircleOutlineIcon
            className="basket-product-quantity-buttons"
            style={{ color: quantity === stock ? 'gray' : '' }}
            onClick={() => incrementQuantity(id)}
          />
        </div>
        <div className="basket-product-price">{totalPrice.toFixed(2)} zł</div>
      </div>
      <div className="basket-product-remove-container">
        <RemoveButton deleteProductFromBasket={() => deleteProductFromBasket(id)} />
      </div>
    </div>
  );
};

export default BasketProduct;
