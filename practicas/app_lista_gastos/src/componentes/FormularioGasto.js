import React, { useState } from 'react'
import {ContenedorBoton, InputGrande, Input, Formulario, ContenedorFiltros} from './../elementos/ElementosDeFormulario';
import Boton from '../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg';
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import agregarGasto from '../firebase/agregarGasto';
import fromUnixTime from 'date-fns/fromUnixTime'
import getUnixTime from 'date-fns/getUnixTime'
import { useAuth } from '../contextos/AuthContext';
import Alerta from '../elementos/Alerta';

const FormularioGasto = () => {

    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    const [categoria, cambiarCategoria] = useState('hogar');
    const [fecha, cambiarFecha] = useState(new Date());
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const {usuario} = useAuth();

    const handleChange = (e) => {
        if(e.target.name === 'descripcion'){
            cambiarInputDescripcion(e.target.value)
        }else if(e.target.name === 'cantidad'){
            cambiarInputCantidad(e.target.value.replace(/[^0-9,]/g, ''))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let cantidad = parseFloat(inputCantidad).toFixed(2);

        if(inputDescripcion !== '' && inputCantidad !== ''){

            if(cantidad){
                agregarGasto({
                    categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: inputCantidad,
                    fecha: getUnixTime(fecha),
                    uidUsuario: usuario.uid
                })
                .then(()=>{
                    cambiarCategoria('hogar')
                    cambiarInputDescripcion('')
                    cambiarInputCantidad('')
                    cambiarFecha(new Date())

                    cambiarEstadoAlerta(true);
                    cambiarAlerta({tipo: 'exito', mensaje: 'El gasto fue añadido correctamente'})
                })
                .catch((error)=>{
                    cambiarEstadoAlerta(true);
                    cambiarAlerta({tipo: 'error', mensaje: 'Hubo un problema al intentar añadir el gasto.'})
                })
            }else{
                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo: 'error', mensaje: 'El valor que ingresaste no es correcto.'})
            }

        }else{
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: 'Por favor, rellene todos los campos.'})
        }

    }

    return ( 
        <Formulario onSubmit={handleSubmit} > 
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria} cambiarCategoria={cambiarCategoria} />
                <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
            </ContenedorFiltros>
            <div>
                <Input type="text" name="descripcion" id="descripcion" placeholder="Descripcion" value={inputDescripcion} onChange={handleChange} />
                <InputGrande type="text" name="cantidad" id="cantidad" placeholder="0,00 €" value={inputCantidad} onChange={handleChange} />
            </div>
            <ContenedorBoton>
                <Boton as="button" primario="true" $conIcono type="submit">Añadir Gasto <IconoPlus /></Boton>
            </ContenedorBoton>
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} />
        </Formulario>
     );
}
 
export default FormularioGasto;