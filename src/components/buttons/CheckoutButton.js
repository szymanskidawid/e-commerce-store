import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CheckoutButton = ({ color, onClick, basketItemsAmount }) => (
  <Button className="checkout-button" variant="contained" color={color} onClick={onClick}>
    <ShoppingCartIcon style={{ fontSize: 30 }} />
    <div className="checkout-button-products-amount-label" style={{ display: basketItemsAmount === 0 && 'none' }}>
      {basketItemsAmount}
    </div>
  </Button>
);

export default CheckoutButton;
