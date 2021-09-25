import React from 'react';
import './CopyRight.style.scss';

const CopyRightComponent = ({ name }) => (
  <div className="CopyRight">
    <span>&copy; Copyright</span>
    <span>
      Powered by
      { name }
    </span>
  </div>
);

export default CopyRightComponent;
