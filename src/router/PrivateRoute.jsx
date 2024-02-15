import { useContext, useEffect, useLayoutEffect } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
     
    useEffect(() => {
        const pathLs = localStorage.getItem('lastPath');
        
        if (pathLs !== null) {
            navigate(pathLs);
        }
    }, []);

    const { logged } = useContext(AuthContext);

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    useEffect(() => {
        localStorage.setItem('lastPath', lastPath);
    }, [lastPath])

    return (logged) ?
        children :
        <Navigate to='/login' />
}

