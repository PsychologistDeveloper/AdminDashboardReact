import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import isMobile from 'Utils/Mobile';

import './Nav.styles.scss';

export const NavComponent = (props) => {
  const { isGrandAdmin } = props;

  return (
    <Menu
      noOverlay
      isOpen={!isMobile.any() && true}
      disableCloseOnEsc
      disableAutoFocus
      menuClassName="my-class"
      width={isMobile.any() ? '100%' : '30vh'}
    >
      <div className="NavigationWrapper">
        <div className="avatar">
          <img src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg" alt="Avatar" />
        </div>
        <div className="Navigation-Links">
          <Link to="/">Dashboard</Link>
          <Link to="/chat-board">Chat Board</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/statistics">Statistics</Link>
          { isGrandAdmin && (<Link to="/grand-admin">Grand Admin</Link>) }

        </div>
      </div>
    </Menu>
  );
};

export default NavComponent;
