import { createBrowserRouter } from "react-router-dom";

import { HeroesApp } from "../";
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const routes = () => createBrowserRouter([
    {
        path: "/",
        element: 
            <PrivateRoute>
                <HeroesApp />
            </PrivateRoute>,
        children: HeroesRoutes
    },
    {
        path: '/login',
        element: 
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
    }
]);




