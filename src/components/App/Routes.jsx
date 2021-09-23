import React, { cloneElement } from 'react';
import { Route } from 'react-router-dom';

import AuthPage from 'Routes/AuthPage';
import ChatBoardPage from 'Routes/ChatBoardPage';
import CustomersPage from 'Routes/CustomersPage';
import MainPage from 'Routes/MainPage';
import StatisticsPage from 'Routes/StatisticsPage';
import GrandAdminPage from 'Routes/GrandAdminPage';

export const Routes = () => {
  function getRenderMap() {
    return [
      {
        component: <Route exact path="/" render={(props) => <MainPage {...props} />} />,
        position: 0,
      },
      {
        component: <Route path="/auth" render={(props) => <AuthPage {...props} />} />,
        position: 5,
      },
      {
        component: <Route path="/chat-board" render={(props) => <ChatBoardPage {...props} />} />,
        position: 10,
      },
      {
        component: <Route path="/customers" render={(props) => <CustomersPage {...props} />} />,
        position: 15,
      },
      {
        component: <Route path="/statistics" render={(props) => <StatisticsPage {...props} />} />,
        position: 20,
      },
      {
        component: <Route path="/grand-admin" render={(props) => <GrandAdminPage {...props} />} />,
        position: 25,
      },
    ];
  }

  function renderRoutes() {
    return getRenderMap().map(({
      component,
      position,
    }) => cloneElement(component, { key: position }));
  }

  return (
    <>
      { renderRoutes() }
    </>
  );
};

export default Routes;
