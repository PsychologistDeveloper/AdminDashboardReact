import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'Utils/Firebase';
import { useHistory } from 'react-router-dom';
import CustomersPage from './CustomersPage.component';

export const CustomersPageContainer = () => {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return false;
    }

    if (!user) history.replace('/auth');
  }, [user, loading]);

  return (
    <CustomersPage />
  );
};

export default CustomersPageContainer;
