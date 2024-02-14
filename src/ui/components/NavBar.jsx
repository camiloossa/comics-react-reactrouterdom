import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {

        logout();

        navigate('/login', { replace: true });
    }

    return (
        <div className='header__barra'>
            <div className="header__navegacion">
                <div className="header__logo">
                    <img className="header__img" src="/img/logo.png" alt="Logo Comics" />
                    <h1 className='header__texto'>Heroes <span className="header__texto--color">APP</span></h1>
                </div>

                <nav className="navegacion">
                    <NavLink className={({ isActive }) => `navegacion__link ${isActive ? 'navegacion__link--active' : ''} `} to="/marvel" >
                        Marvel
                    </NavLink>

                    <NavLink className={({ isActive }) => `navegacion__link ${isActive ? 'navegacion__link--active' : ''} `} to="/dc" >
                        DC
                    </NavLink>

                    <NavLink className={({ isActive }) => `navegacion__link ${isActive ? 'navegacion__link--active' : ''} `} to="/search" >
                        Search
                    </NavLink>
                </nav>
            </div>

            <div className="header__access">
                <p className='header__user'>{user?.name}</p>
                <button className='header__logout' onClick={onLogout}><span>Logout</span></button>
            </div>
        </div>
        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

        //     <Link
        //         className="navbar-brand"
        //         to="/"
        //     >
        //         Asociaciones
        //     </Link>

        //     <div className="navbar-collapse">
        //         <div className="navbar-nav">

        //             <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `} to="/marvel" >
        //                 Marvel
        //             </NavLink>

        //             <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `} to="/dc" >
        //                 DC
        //             </NavLink>

        //             <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `} to="/search" >
        //                 Search
        //             </NavLink>
        //         </div>
        //     </div>

        //     <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        //         <ul className="navbar-nav ml-auto">
        //             <span className='nav-item nav-link text-primary'> { user?.name  } </span>
        //             <button className='nav-item nav-link btn' onClick={ onLogout }>Logout</button>
        //         </ul>
        //     </div>
        // </nav>
    )
}