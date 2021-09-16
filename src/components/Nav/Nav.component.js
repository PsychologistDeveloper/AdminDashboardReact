import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.styles.scss';

export const NavComponent = () => (
  <div className="NavigationWrapper">
    <div className="avatar">
      <img src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg" alt="Avatar" />
    </div>
    <div className="Navigation-Links">
      <Link to="/">Dashboard</Link>
      <Link to="/chat-board">Chat Board</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/statistics">Statistics</Link>
    </div>
  </div>
);

export default NavComponent;
