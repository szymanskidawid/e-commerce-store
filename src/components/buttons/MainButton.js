import Button from '@mui/material/Button';

const MainButton = ({ className, color, onClick, text }) => (
  <Button className={className} variant="contained" color={color} onClick={onClick}>
    {text}
  </Button>
);

export default MainButton;
