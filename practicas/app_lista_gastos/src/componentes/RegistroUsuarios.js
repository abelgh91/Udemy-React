import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import Boton from '../elementos/Boton'
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario'
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg'
import styled from 'styled-components'
import { auth } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth' 
import { useNavigate } from 'react-router-dom'


const Svg = styled(SvgLogin)`
width: 100%;
max-height: 6.25rem;
margin-bottom: 1.25rem;
`;

const RegistroUsuarios = () => {
    const navigate = useNavigate();
    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')

    const handleChange = (e) => {
        switch(e.target.name){
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Comprobamos del lado del cliente que el correo es valido
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            console.log('pon un correo válido');
            return;
        }

        if(correo === '' || password === '' || password2 === ''){
            console.log('por favor, rellene todos los datos');
            return;
        }

        if(password !== password2){
            console.log('las contraseñas no coinciden');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, correo, password)
            navigate('/');
            
        } catch (error) {
            let mensaje;
            switch(error.code){
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            console.log(mensaje)
        }
    }

    return ( 
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">
                            Iniciar Sesión
                        </Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario onSubmit={handleSubmit} >
                <Svg />
                <Input type="email" name="email" placeholder="Correo Electrónico" value={correo} onChange={handleChange} />
                <Input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleChange} />
                <Input type="password" name="password2" placeholder="Repetir Contraseña" value={password2} onChange={handleChange} />
                <ContenedorBoton>
                    <Boton as="button" primario="true" type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
     );
}
 
export default RegistroUsuarios;