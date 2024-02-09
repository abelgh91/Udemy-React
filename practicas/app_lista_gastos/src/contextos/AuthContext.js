import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState();
    const [cargando, cambiarCargando] = useState(true)

    useEffect(()=>{
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario)=>{
            cambiarUsuario(usuario)
            cambiarCargando(false)
        });

        return cancelarSuscripcion;
    },[])

    return ( 
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
     );
}
 
export {AuthProvider, AuthContext, useAuth};