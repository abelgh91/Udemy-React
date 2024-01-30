import React, { useEffect, useState } from 'react'
import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import ListaTareas from './componentes/ListaTareas';


const App = () => {

  //Obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = 
  localStorage.getItem('Tareas') ? 
  JSON.parse(localStorage.getItem('Tareas')) : [];

  //establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardamos el estado dentro del localStorage
  useEffect(()=>{
    localStorage.setItem('Tareas', JSON.stringify(tareas));
  }, [tareas]);

  //Accedemos a localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
        <Header 
          mostrarCompletadas={mostrarCompletadas} 
          cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
        <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
        <ListaTareas 
          tareas={tareas} 
          cambiarTareas={cambiarTareas}
          mostrarCompletadas={mostrarCompletadas} 
          />
    </div>
  );
}

export default App;
