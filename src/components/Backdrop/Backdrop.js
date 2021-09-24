import React from 'react';

import './Backdrop.style.scss';

const Backdrop = (props) => {
  const { onClick } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="Backdrop" onClick={onClick} />
  );
};

export default Backdrop;
