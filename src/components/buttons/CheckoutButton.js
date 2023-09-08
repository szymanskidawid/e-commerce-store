import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CheckoutButton = ({ color, onClick, basketItems }) => {
  return (
    <Button className="checkout-button" variant="contained" color={color} onClick={onClick}>
      <ShoppingCartIcon style={{ fontSize: 45 }} />
      <div className="checkout-button-products-amount-label" style={{ display: basketItems === 0 ? 'none' : 'flex' }}>
        {basketItems}
      </div>
    </Button>
  );
};

CheckoutButton.propTypes = {
  onClick: PropTypes.func,
};

export default CheckoutButton;
