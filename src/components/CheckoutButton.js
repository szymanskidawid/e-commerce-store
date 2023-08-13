import PropTypes from 'prop-types';

const CheckoutButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick}
    className="checkout-button">
      {text}
    </button>
  );
}

CheckoutButton.defaultProps = {
  text: 'CheckoutBtn'
}

CheckoutButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default CheckoutButton;
