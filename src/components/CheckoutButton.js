import PropTypes from 'prop-types';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CheckoutButton = ({ onClick }) => {
  return (
    <div onClick={onClick}
    className='checkout-button'>
      <ShoppingCartIcon style={{ fontSize: 45, color: 'white' }} />
    </div>
  );
}

CheckoutButton.propTypes = {
  onClick: PropTypes.func
}

export default CheckoutButton;
