import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { routes } from './router/AppRouter.jsx';

import './style.css'; 
import { AuthProvider } from './auth/index.js';


const appRoutes = routes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router = { appRoutes }  />
    </AuthProvider>
  </React.StrictMode>,
)
