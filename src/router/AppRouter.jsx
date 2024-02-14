import { createBrowserRouter } from "react-router-dom";

import { HeroesApp, ErrorPage } from "../";
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { HomePage } from "../ui/pages/HomePage";


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




