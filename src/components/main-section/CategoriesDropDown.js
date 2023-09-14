import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CategoriesDropDown = ({ dropDownItems, setDropDownItems }) => {
  //Displays categories when hovered over the main label.
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleHover = (isHovered) => {
    setIsDropDownVisible(isHovered);
  };

  return (
    <div
      className="categories-container"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="categories-hover-container">Categories</div>
      <div
        className={`categories-dropdown-container 
          ${isDropDownVisible ? 'visible' : ''}`}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox style={{ color: 'green' }} defaultChecked />}
            label="Food"
            onClick={() =>
              setDropDownItems({
                ...dropDownItems,
                food: !dropDownItems.food,
              })
            }
          />
          <FormControlLabel
            control={<Checkbox style={{ color: 'green' }} defaultChecked />}
            label="Kitchen"
            onClick={() =>
              setDropDownItems({
                ...dropDownItems,
                kitchen: !dropDownItems.kitchen,
              })
            }
          />
          <FormControlLabel
            control={<Checkbox style={{ color: 'green' }} defaultChecked />}
            label="Electronics"
            onClick={() =>
              setDropDownItems({
                ...dropDownItems,
                electronics: !dropDownItems.electronics,
              })
            }
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default CategoriesDropDown;
