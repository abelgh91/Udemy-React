import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion'
import ContadorFuncional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './elementos/Boton';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);
  return(
    <div className='contenedor'>
    {sesion === true ? 
    <div>
      <Usuario />
      {<ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20}/>}
      {/*<button onClick={()=> cambiarEstadoSesion(false)}>Cerrar sesión</button>*/}
      <Boton largo marginTop onClick={()=> cambiarEstadoSesion(false)}>Cerrar sesión</Boton>
    </div> 
    : 
    <div>
      <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
    </div>}
    </div>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);