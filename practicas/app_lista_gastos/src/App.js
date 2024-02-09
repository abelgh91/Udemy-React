import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from './elementos/Header'
import Boton from './elementos/Boton'
import BotonCerrarSesion from './componentes/BotonCerrarSesion'
import FormularioGasto from './componentes/FormularioGasto'
import BarraTotalGastado from './componentes/BarraTotalGastado'

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Añadir Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Añadir Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorías</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormularioGasto />
      <BarraTotalGastado />
    </>
   );
}
 
export default App;