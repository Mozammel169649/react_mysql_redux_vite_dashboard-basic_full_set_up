import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layouts from './layouts/Layouts';
import Userroutes from './pages/management/user/config/routes';
import { Provider } from 'react-redux';
import store from './redux/app/store';


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
                Userroutes,
            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Component />
    </Provider>

);