import React from 'react';

import './SideDrawer.style.scss';
import { Link } from 'react-router-dom';
import CsvReportButton from 'Components/CsvReportButton';

const SideDrawerComponent = (props) => {
  const { show, onCloseClick } = props;

  let drawerClasses = 'SideDrawer';

  if (show) {
    drawerClasses = 'SideDrawer open';
  }
  return (
    <nav className={drawerClasses}>
      <button type="button" onClick={onCloseClick}>X</button>
      <div className="Navigation-Links">
        <Link to="/" onClick={onCloseClick}>Dashboard</Link>
        <Link to="/chat-board" onClick={onCloseClick}>Chat Board</Link>
        <Link to="/customers" onClick={onCloseClick}>Customers</Link>
        <Link to="/statistics" onClick={onCloseClick}>Statistics</Link>
        <CsvReportButton />
      </div>
    </nav>
  );
};

export default SideDrawerComponent;
