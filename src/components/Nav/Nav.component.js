import React from 'react';
import { Link } from 'react-router-dom';
import CsvReportButton from 'Components/CsvReportButton';
import DrawerToggleButton from 'Components/DrawerToggleButton';
import CopyRightComponent from 'Components/CopyRight/CopyRight.component';
import { tabs } from 'Utils/Nav/NavLinks';
import './Nav.styles.scss';

export const NavComponent = ({ onClick, activeTab }) => {
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
          <CopyRightComponent name="Johny" />
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
