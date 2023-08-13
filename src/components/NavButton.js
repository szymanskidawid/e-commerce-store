import PropTypes from 'prop-types';

const NavButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick}
    className="nav-button">
      {text}
    </button>
  );
}

NavButton.defaultProps = {
  text: 'NavButton'
}

NavButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default NavButton;
