import React from 'react';
import { Link } from 'react-router-dom';
import CsvReportButton from 'Components/CsvReportButton';
import DrawerToggleButton from 'Components/DrawerToggleButton';

import './Nav.styles.scss';

export const NavComponent = () => (
  <div className="NavigationContainer">
    <DrawerToggleButton />
    <nav className="NavigationWrapper">
      <div className="Navigation-Links">
        <Link to="/">Dashboard</Link>
        <Link to="/chat-board">Chat Board</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/statistics">Statistics</Link>
        <CsvReportButton />
      </div>
    </nav>
  </div>
);

export default NavComponent;
