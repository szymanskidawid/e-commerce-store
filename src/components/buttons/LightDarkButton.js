import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const LightDarkButton = ({ color, onClick }) => {
  //Below is used to cycle icons between sun and moon.
  const [buttonMode, setButtonMode] = useState(false)

  const toggleButtonIcon = () => {
    setButtonMode(previousMode => !previousMode);
  }

  //Function to combine above function and onClick func passed as prop.
  const buttonClick = () => {
    toggleButtonIcon()
    onClick()
  }

  return (
    <Button className='light-dark-mode-button'
    variant='contained'
    color={color}
    onClick={buttonClick}>
      {buttonMode ? (
        <LightModeIcon style={{ fontSize: 45, color: 'white' }} />
      ) : (
        <DarkModeIcon style={{ fontSize: 45, color: 'black' }} />
      )} 
    </Button>
  );
}

export default LightDarkButton;
