import React from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';

const sesion = true;

const App = () => {
  return(
    <>
    {sesion === true ? <Usuario /> : <p>No has iniciado sesión</p>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);