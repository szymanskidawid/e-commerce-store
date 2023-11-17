import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CategoriesDropDown = ({ dropDownItems, setDropDownItems }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleHover = (isHovered) => {
    setIsDropDownVisible(isHovered);
  };

  const formControlLabelItems = Object.keys(dropDownItems);

  return (
    <div className="categories-container" onMouseLeave={() => handleHover(false)}>
      <div className="categories-hover-container" onMouseEnter={() => handleHover(true)}>
        Categories
      </div>
      <div
        className={`categories-dropdown-container 
          ${isDropDownVisible ? 'visible' : ''}`}
      >
        <FormGroup>
          {formControlLabelItems.map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox style={{ color: 'green' }} defaultChecked />}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
              onClick={() =>
                setDropDownItems({
                  ...dropDownItems,
                  [item]: !dropDownItems[item],
                })
              }
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

export default CategoriesDropDown;
