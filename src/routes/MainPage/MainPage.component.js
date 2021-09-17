import React from 'react';
import Button from '@mui/material/Button';

export const MainPage = (props) => {
  const { logout } = props;

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={logout}
      >
        Logout
      </Button>
    </>

  );
};

export default MainPage;
