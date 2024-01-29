import React, { useState } from "react";
/*import styles from './ContadorFuncional.module.css';*/
import Boton from "../elementos/Boton";

const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);
    const incrementar = (cantidad) => {
        cambiarCuenta(cuenta + cantidad)
    }
    const disminuir = (cantidad) => {
        cambiarCuenta(cuenta - cantidad)
    }
    return ( 
        <div>
            <h1>Contador: {cuenta}</h1>
            {/*<button className={styles.boton} onClick={()=> incrementar(props.cantidadAIncrementar)}>Incrementar</button>*/}
            {/*<button className={styles.boton} onClick={()=> disminuir(props.cantidadADisminuir)}>Disminuir</button>*/}
            <Boton negro marginRight onClick={()=> incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro onClick={()=> disminuir(props.cantidadADisminuir)}>Incrementar</Boton>
        </div>
     );
}
 
export default ContadorFuncional;