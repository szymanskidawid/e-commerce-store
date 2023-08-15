import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Button used to change between Light and Dark mode.

const LightDarkButton = ({ onClick }) => {
  //Below is used to cycle icons between sun and moon.
  const [isLightMode, setIsLightMode] = useState(false)

  const toggleColorMode = () => {
    setIsLightMode(previousMode => !previousMode);
  }

  return (
    <div onClick={toggleColorMode} className='light-dark-mode-button'>
      {/*Ternary operator to determine which icon to display.*/}
      {isLightMode ? (
        <LightModeIcon style={{ fontSize: 45, color: 'white' }} />
      ) : (
        <DarkModeIcon style={{ fontSize: 45, color: 'black' }} />
      )}    
    </div>
  );
}

export default LightDarkButton;
