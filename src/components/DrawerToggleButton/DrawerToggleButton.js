import React from 'react';

import './DrawerToggleButton.style.scss';

const DrawerToggleButton = (props) => {
  const { onClick } = props;

  return (
    <button type="button" className="toggle_button" onClick={onClick}>
      <span className="toggle_button__line" />
      <span className="toggle_button__line" />
      <span className="toggle_button__line" />
    </button>
  );
};

export default DrawerToggleButton;
