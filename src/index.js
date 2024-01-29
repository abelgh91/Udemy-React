import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion'
import ContadorFuncional from './componentes/ContadorFuncional';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);
  return(
    <>
    {sesion === true ? 
    <div>
      <Usuario />
      {<ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20}/>}
      {/*<ContadorClass cantidadAIncrementar={100} cantidadADisminuir={20}/>*/}
      <button onClick={()=> cambiarEstadoSesion(false)}>Cerrar sesión</button>
    </div> 
    : 
    <div>
      <p>No has iniciado sesión</p>
      <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
    </div>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);