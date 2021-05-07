import { firebase } from '../../../Firebase/FirebaseConfig';
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;

const deleteSong = async (DocId,songId) => {
    try {
        const response = await firebase.firestore().collection("Content").doc(DocId).get();
        const Data = response.data().contentArray
        await firebase
        .firestore()
        .collection(`Content`)
        .doc(DocId)
        .update({
            contentArray: Data.filter(item=>item.id!==songId)
        })
        success("Pin eliminado");
    } catch {
        error("Error al eliminar Pin");
    }
}
export { deleteSong };