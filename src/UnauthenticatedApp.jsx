import React from 'react'
import Login from './Pages/Login/Login';
import { useRoutes } from 'react-router-dom';

function UnauthenticatedApp() {
    const routes = useRoutes([
        { path: '/login', element: <Login /> }
    ]);
    return routes;
}

export default UnauthenticatedApp;
