import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveButton from '../buttons/RemoveButton';

const BasketProduct = ({
  darkMode,
  id,
  name,
  quantity,
  decrementQuantity,
  incrementQuantity,
  price,
  deleteProductFromBasket,
}) => {
  const totalPrice = price * quantity;
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
        <div className="basket-product-name">{name}</div>
        <div className="basket-product-quantity-container">
          <RemoveCircleOutlineIcon className="basket-product-quantity-buttons" onClick={() => decrementQuantity(id)} />
          <p className="basket-product-quantity-number">{quantity}</p>
          <AddCircleOutlineIcon className="basket-product-quantity-buttons" onClick={() => incrementQuantity(id)} />
        </div>
        <div className="basket-product-price">{totalPrice} zł</div>
      </div>
      <div className="basket-product-remove-container">
        <RemoveButton deleteProductFromBasket={deleteProductFromBasket} />
      </div>
    </div>
  );
};

export default BasketProduct;
