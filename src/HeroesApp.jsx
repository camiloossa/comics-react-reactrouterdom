import { Outlet } from 'react-router-dom';
import { Navbar } from './ui';
import { AuthProvider } from './auth/context';

const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export  { HeroesApp }
