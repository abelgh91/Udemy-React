import React, { useState, useEffect } from "react";
/*import styles from './ContadorFuncional.module.css';*/
import Boton from "../elementos/Boton";

const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);

    // componentDidMount y componentDidUpdate
    //Este hook se ejecuta cada vez que renderiza
    useEffect(()=>{
        console.log('el componente se renderizó')
    });

    //componentDidMount
    //se ejecuta solamente el primer renderizado
    useEffect(() => {
        console.log('el componente cargó por primera vez')
    }, [])

    //se ejecuta cuando cambia 'cuenta'
    useEffect(() => {
      console.log('ha cambiado el contador')
    }, [cuenta])
    
    useEffect(() => {
        return (()=>{
            console.log('adios componente')
        })
    }, [])
    
    const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad)
    const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad)
    
    return ( 
        <div>
            <h1>Contador: {cuenta}</h1>
            {/*<button className={styles.boton} onClick={()=> incrementar(props.cantidadAIncrementar)}>Incrementar</button>*/}
            {/*<button className={styles.boton} onClick={()=> disminuir(props.cantidadADisminuir)}>Disminuir</button>*/}
            <Boton negro={true.toString()} marginright onClick={()=> incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro={true.toString()} onClick={()=> disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
        </div>
     );
}
 
export default ContadorFuncional;