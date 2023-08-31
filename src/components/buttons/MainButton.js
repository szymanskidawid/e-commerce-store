import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

// Button from MaterialUI library used in various places around the website.

const MainButton = ({ className, color, onClick, text }) => {
  return (
    <Button className={className}
    variant='contained'
    color={color}
    onClick={onClick}>
      {text}
    </Button>
  );
}

MainButton.defaultProps = {
  text: 'Button',
}

MainButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default MainButton;