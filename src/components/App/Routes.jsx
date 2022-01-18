import React, { cloneElement } from 'react';
import { Route } from 'react-router-dom';

import AuthPage from 'Routes/AuthPage';
import ChatBoardPage from 'Routes/ChatBoardPage';
import StatisticsPage from 'Routes/StatisticsPage';
import GrandAdminPage from 'Routes/GrandAdminPage';
import NotificationList from 'Components/NotificationList';

export const Routes = () => {
    function getRenderComponentsMap() {
        return [
            {
                component: <NotificationList />,
                position: 0,
            },
        ];
    }

    function getRenderSwitchMap() {
        return [
            {
                component: <Route exact path="/" render={(props) => <ChatBoardPage {...props} />} />,
                position: 100,
            },
            {
                component: <Route path="/auth" render={(props) => <AuthPage {...props} />} />,
                position: 105,
            },
            {
                component: <Route path="/statistics" render={(props) => <StatisticsPage {...props} />} />,
                position: 120,
            },
            {
                component: <Route path="/grand-admin" render={(props) => <GrandAdminPage {...props} />} />,
                position: 125,
            },
        ];
    }

    function renderComponents() {
        return getRenderComponentsMap().map(({
            component,
            position,
        }) => cloneElement(component, { key: position }));
    }

    function renderRoutes() {
        return getRenderSwitchMap().map(({
            component,
            position,
        }) => cloneElement(component, { key: position }));
    }

    return (
        <>
            { renderComponents() }
            { renderRoutes() }
        </>
    );
};

export default Routes;
