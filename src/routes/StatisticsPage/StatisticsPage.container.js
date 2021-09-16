import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'Utils/Firebase';
import { useHistory } from 'react-router-dom';
import StatisticsPage from './StatisticsPage.component';

export const StatisticsPageContainer = () => {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return false;
    }

    if (!user) history.replace('/');
  }, [user, loading]);

  return (
    <StatisticsPage />
  );
};

export default StatisticsPageContainer;
