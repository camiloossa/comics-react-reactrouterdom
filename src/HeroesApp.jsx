import { Outlet } from 'react-router-dom';
import { Navbar } from './ui';
import { AuthProvider } from './auth/context';

const HeroesApp = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="contenedor">
        <Outlet />
      </div>
    </>
  )
}

export { HeroesApp }
