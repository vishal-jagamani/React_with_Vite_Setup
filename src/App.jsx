import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './components/AppRoutes/Router';

const App = () => {
    return (
        <>
            <RouterProvider router={Router} />
        </>
    );
};

export default App;
