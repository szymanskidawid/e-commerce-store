import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Button used to change between Light and Dark mode.

const LightDarkButton = ({ color, onClick }) => {
  //Below is used to cycle icons between sun and moon.
  const [isLightMode, setIsLightMode] = useState(false)

  const toggleColorMode = () => {
    setIsLightMode(previousMode => !previousMode);
  }

  return (

    <Button className='light-dark-mode-button'
    variant='contained'
    color={color}
    onClick={toggleColorMode}>
      {isLightMode ? (
        <LightModeIcon style={{ fontSize: 45, color: 'white' }} />
      ) : (
        <DarkModeIcon style={{ fontSize: 45, color: 'black' }} />
      )} 
    </Button>
  );
}

export default LightDarkButton;
