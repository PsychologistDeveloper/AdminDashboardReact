import React from 'react';
import Button from '@mui/material/Button';

export const MainPage = (props) => {
  const { signOut } = props;

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={signOut}
      >
        Logout
      </Button>
    </>

  );
};

export default MainPage;
