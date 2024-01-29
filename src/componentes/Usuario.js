import React from 'react';
import { Titulo } from './Titulo';
import styled from 'styled-components';

const Usuario = () =>{
    const country = 'Spain';
    const friends = ['Antonio', 'Javier', 'Maria']

    return (
        <>
        <Titulo />
        {country && <p>Tú eres de: {country}</p>}
        <Parrafo>Tu lista de amigos:</Parrafo>
        <ul>
            {friends.map((amigo, index) => <li key={index}>{amigo}</li>)}
        </ul>
        <Parrafo>A la playa..</Parrafo>
        </>
    );
};

const Parrafo = styled.p`
margin: 20px 0;
`;

export default Usuario;