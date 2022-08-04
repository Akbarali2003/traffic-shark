import React from 'react'
import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';
function AuthenticatedApp() {

    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/register', element: <Register /> }
    ]);
    return routes;
}

export default AuthenticatedApp
