import { useEffect, useState } from 'react'

const useObtenerArticulo = () => {
    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            establecerArticulos([
                {
                    id: 1,
                    titulo: 'Titulo del primer articulo'
                },
                {
                    id: 2,
                    titulo: 'Titulo del segundo articulo'
                },
                {
                    id: 3,
                    titulo: 'Titulo del tercer articulo'
                }
            ]);
            establecerCargando(false)
        }, 3000);
    }, []);

    return [articulos, cargando] ;
}
 
export default useObtenerArticulo;