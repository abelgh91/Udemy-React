import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";

const borrarGasto = async(id) => {
    await deleteDoc(doc(db, 'gastos', id))
};

export default borrarGasto;