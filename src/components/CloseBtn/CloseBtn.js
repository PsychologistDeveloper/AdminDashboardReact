import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const CloseBtn = (props) => {
  const { className, onClick } = props;

  return (
    <IconButton className={className} onClick={onClick}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBtn;
