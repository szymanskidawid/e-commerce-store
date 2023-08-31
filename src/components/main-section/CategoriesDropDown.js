import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";


const CategoriesDropDown = () => {
  //Displays categories when hovered over the main label.
  const [ isDropDownVisible, setIsDropDownVisible] = useState(false)

  const handleHover = (isHovered) => {
    setIsDropDownVisible(isHovered)
  }

  return (
    <div className="categories-container">
      <div className="categories-hover-container"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}>
        Categories
      </div>
      <div className={`categories-dropdown-container 
      ${isDropDownVisible ? 'visible' : ''}`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}>
        <FormGroup>
          <FormControlLabel control={
            <Checkbox style={{ color: 'green' }} defaultChecked />} 
            label="Food" />
          <FormControlLabel control={
            <Checkbox style={{ color: 'green' }} defaultChecked />} 
            label="Kitchen" />
          <FormControlLabel control={
            <Checkbox style={{ color: 'green' }} defaultChecked />} 
            label="Electronics" />
        </FormGroup>
      </div>
    </div> 
  );
}

export default CategoriesDropDown;