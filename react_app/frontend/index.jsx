import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layouts from './layouts/Layouts';


function Component() {
    const router = createHashRouter([
        {
            path: "/",
            element: <Layouts></Layouts>,
            children: [
                {
                    path: "",
                    element: <Dashboard></Dashboard>
                },
            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}
const container = document.getElementById('home');
const root = createRoot(container);
root.render(
        <Component />
);