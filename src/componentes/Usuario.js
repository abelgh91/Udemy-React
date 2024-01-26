import React from 'react';
import { Titulo } from './Titulo';

const Usuario = () =>{
    const country = 'Spain';
    const friends = ['Antonio', 'Javier', 'Maria']

    return (
        <>
        <Titulo />
        <Titulo />
        {country && <p>Tú eres de: {country}</p>}
        <p>Tu lista de amigos:</p>
        <ul>
            {friends.map((amigo, index) => <li key={index}>{amigo}</li>)}
        </ul>
        <p>A la playa..</p>
        </>
    );
};

export default Usuario;