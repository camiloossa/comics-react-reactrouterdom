import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from './ui';

const HeroesApp = () => {

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="contenedor">
        <Outlet />
      </div>
      <div className="footer">
        <p className="footer__texto">Todos los Derechos &copy; Reservados - Logica y dinamica del docente <span className='footer__textp--color'>Fernando Herrera</span></p>
      </div>
    </>
  )
}

export { HeroesApp }
