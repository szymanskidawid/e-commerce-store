import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// This button allows to toggle BasketGrid.

const CheckoutButton = ({ color, onClick }) => {
  return (
    <Button className='checkout-button'
    variant='contained'
    color={color}
    onClick={onClick}>
      <ShoppingCartIcon style={{ fontSize: 45 }} />
    </Button>
  );
}

CheckoutButton.propTypes = {
  onClick: PropTypes.func
}

export default CheckoutButton;
