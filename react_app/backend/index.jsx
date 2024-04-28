import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layouts from './layouts/Layouts';
import UserRoutes from './pages/management/user/config/routes';
import ProductRoutes from './pages/management/product/config/routes';
import RoleRoutes from './pages/management/role/config/routes';
import CategoryRoutes from './pages/management/category/config/routes';
import SupplierRoutes from './pages/management/supplier/config/routes';
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
                UserRoutes,
                ProductRoutes,
                RoleRoutes,
                CategoryRoutes,
                SupplierRoutes

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