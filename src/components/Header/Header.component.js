import React from 'react';

import DrawerToggleButton from 'Components/DrawerToggleButton';

import './Header.styles.scss';

export const HeaderComponent = () => (
  <header className="Header">
    <h1>logo</h1>
    <DrawerToggleButton />
  </header>
);

export default HeaderComponent;
