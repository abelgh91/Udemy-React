import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContextoTema } from '../context/contextoTema';

const Controles = () => {

    const {aumentarFuente, disminuirFuente, alinearCentro, alinearDerecha, alinearIzquierda} = useContext(ContextoTema);

    return ( 
        <ContenedorControles>
            <div>
                <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
                <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
            </div>
            <div>
                <Boton onClick={alinearIzquierda}>Izquierda</Boton>
                <Boton onClick={alinearCentro}>Centro</Boton>
                <Boton onClick={alinearDerecha}>Derecha</Boton>
            </div>
        </ContenedorControles>
    );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;
 
const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;
 
export default Controles;