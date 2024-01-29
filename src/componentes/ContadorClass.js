import React, { Component } from "react";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = { contador: 0}
    }

    componentDidMount(){
        console.log('el componente se cargó')
    }
    componentDidUpdate(propiedadesAnteriores, estadoAnterior){
        console.log('el componente se actualizo')
        console.log('propiedades anteriores del componente', propiedadesAnteriores)
        console.log('estado anterior del componente', estadoAnterior)
    }

    componentWillUnmount(){
        console.log('adios componente')
    }

    incrementar(cantidad){
        this.setState((estadoAnterior)=>{
            return {
                contador: estadoAnterior.contador + cantidad
            }
        })
    }

    disminuir(cantidad){
        this.setState((estadoAnterior)=>{
            return {
                contador: estadoAnterior.contador - cantidad
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={()=> this.incrementar(this.props.cantidadAIncrementar)}>incrementar</button>
                <button onClick={()=> this.disminuir(this.props.cantidadADisminuir)}>disminuir</button>
            </div>
        )
    }
}

export default Contador;