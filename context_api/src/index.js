import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProveedorTema } from './context/contextoTema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorTema>
      <App />
    </ProveedorTema>
  </React.StrictMode>
);

