import React, { useState } from 'react'

//Creamos contexto = estado global
const ContextoTema = React.createContext();


const ProveedorTema = ({children}) => {
    const [tema, cambiarTema] = useState(
        {
            alineado: 'center',
            fuente: 200
        })
    return (
        <ContextoTema.Provider value={{tema}}>
            {children}
        </ContextoTema.Provider>
    ) ;
}
 
export {ContextoTema, ProveedorTema};