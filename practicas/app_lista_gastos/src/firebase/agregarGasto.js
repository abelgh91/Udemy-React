import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.config";

const agregarGasto = ({categoria, descripcion, cantidad, fecha, uidUsuario}) => {
    return addDoc(collection(db, 'gastos'), {
            categoria: categoria,
            descripcion: descripcion,
            cantidad: Number(cantidad),
            fecha: fecha,
            uidUsuario: uidUsuario})
}
 
export default agregarGasto;