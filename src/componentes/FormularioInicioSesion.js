import React, { useState } from "react";
import styles from './FormularioInicioSesion.module.css';
import Boton from "../elementos/Boton";

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');
    const onChange = (e) => {
        if(e.target.name === 'usuario'){
            cambiarUsuario(e.target.value);
        }else if(e.target.name === 'password'){
            cambiarPassword(e.target.value)
        }
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(usuario === 'abel' && password === '123'){
            props.cambiarEstadoSesion(true)
        }else{
            alert('datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }
    return (
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No has iniciado sesión</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario</label>
                <input 
                type="text" 
                name="usuario" 
                id="usuario"
                value={usuario}
                onChange={onChange}
                className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={onChange}
                className={styles.input}
                />
            </div>
            {/*<button type="submit"className={styles.boton}>Iniciar Sesión</button>*/}
            <Boton largo type="submit">Iniciar Sesión</Boton>
        </form>
    )
}

export default FormularioInicioSesion;