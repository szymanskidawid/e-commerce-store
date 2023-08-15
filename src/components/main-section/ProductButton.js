import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

// Button used to add a product to the basket.

const ProductButton = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}
    className='product-basket-btn'
    variant='contained'
    color='success'>
      {text}
    </Button>
  );
}

ProductButton.defaultProps = {
  text: 'ProdBtn'
}

ProductButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default ProductButton;
