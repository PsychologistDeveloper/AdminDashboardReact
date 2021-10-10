import React from 'react';
import { Link } from 'react-router-dom';
import CsvReportButton from 'Components/CsvReportButton';
import DrawerToggleButton from 'Components/DrawerToggleButton';
import CopyRightComponent from 'Components/CopyRight/CopyRight.component';
import { tabs } from 'Utils/Nav/NavLinks';
import Button from '@mui/material/Button';
import './Nav.styles.scss';

export const NavComponent = ({ onClick, activeTab, signOut }) => {
  function renderLinks() {
    return tabs.map(({
      title,
      link,
      id,
    }) => (
      <Link
        key={id}
        to={link}
        onClick={() => onClick(id)}
        className={`Navigation-Links ${activeTab === id ? 'Navigation-Links_isActive' : ''}`}
      >
        {title}
      </Link>
    ));
  }
  return (
    <div className="NavigationContainer">
      <DrawerToggleButton />
      <nav className="NavigationWrapper">
        <div className="Navigation-Links">
          { renderLinks() }
          <CsvReportButton />
          <div className="CopyRight">
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signOut}
            >
              Logout
            </Button>
            <CopyRightComponent name="Johny" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
