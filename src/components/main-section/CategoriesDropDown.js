import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";


const CategoriesDropDown = ({ isFoodSelected, isKitchenSelected, isElectronicsSelected,setIsFoodSelected, setIsKitchenSelected, setIsElectronicsSelected }) => {
  //Displays categories when hovered over the main label.
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleHover = isHovered => {
    setIsDropDownVisible(isHovered);
  }

  return (
    <div
      className="categories-container"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="categories-hover-container">
        Categories
      </div>
      <div
        className={`categories-dropdown-container 
          ${isDropDownVisible ? 'visible' : ''}`}
      >
        <FormGroup>
          <FormControlLabel control={
            <Checkbox style={{ color: 'green' }} defaultChecked />}
            label="Food" 
            onClick={() => setIsFoodSelected(!isFoodSelected)}
          />
          <FormControlLabel control={
            <Checkbox style={{ color: 'green' }} defaultChecked />}
            label="Kitchen"
            onClick={() => setIsKitchenSelected(!isKitchenSelected)}
          />
          <FormControlLabel control={
            <Checkbox style={{ color: 'green' }} defaultChecked />}
            label="Electronics"
            onClick={() => setIsElectronicsSelected(!isElectronicsSelected)} 
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default CategoriesDropDown;