import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const LightDarkButton = ({ color, onClick }) => {
  const [lightModeIcon, setLightModeIcon] = useState(false);

  const toggleButtonIcon = () => {
    setLightModeIcon((previousMode) => !previousMode);
  };

  const buttonClick = () => {
    toggleButtonIcon();
    onClick();
  };

  return (
    <Button variant="contained" color={color} onClick={buttonClick}>
      {lightModeIcon ? (
        <LightModeIcon style={{ fontSize: 30, color: 'white' }} />
      ) : (
        <DarkModeIcon style={{ fontSize: 30, color: 'black' }} />
      )}
    </Button>
  );
};

export default LightDarkButton;
