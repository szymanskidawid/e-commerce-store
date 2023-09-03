import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveButton from '../buttons/RemoveButton';

const BasketProduct = ({ darkMode, name, price }) => {
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
          <RemoveCircleOutlineIcon className="basket-product-quantity-buttons" />
          <p className="basket-product-quantity-number">1</p>
          <AddCircleOutlineIcon className="basket-product-quantity-buttons" />
        </div>
        <div className="basket-product-price">{price} zł</div>
      </div>
      <div className="basket-product-remove-container">
        <RemoveButton />
      </div>
    </div>
  );
};

export default BasketProduct;
