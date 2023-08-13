import PropTypes from 'prop-types';
import Button from '@mui/material/Button';


const NavButton = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}
    variant='contained'
    className='nav-button'>
      {text}
    </Button>
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
