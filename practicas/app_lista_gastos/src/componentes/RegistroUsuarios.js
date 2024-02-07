import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import Boton from '../elementos/Boton'
import {ContenedorBoton, Input, Formulario} from './../elementos/ElementosDeFormulario'
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg'
import styled from 'styled-components'


const Svg = styled(SvgLogin)`
width: 100%;
max-height: 6.25rem;
margin-bottom: 1.25rem;
`;

const RegistroUsuarios = () => {

    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')

    const handleChange = (e) => {
        console.log(e)
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
            <Formulario>
                <Svg />
                <Input type="email" name="email" placeholder="Correo Electrónico" value={correo} onChange={handleChange} />
                <Input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleChange} />
                <Input type="password2" name="password2" placeholder="Repetir Contraseña" value={password2} onChange={handleChange} />
                <ContenedorBoton>
                    <Boton as="button" primario="true" type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
     );
}
 
export default RegistroUsuarios;