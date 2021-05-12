import { firebase } from '../../../Firebase/FirebaseConfig';
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error,info } = message;
const deleteImage = async (firebase, ref, title) => {
    const storage = firebase.storage();
    const desertRef = storage.ref(ref).child(title);
    try {
        await desertRef.delete();
        console.log(`Se ha borrado ${ref}/${title}`);
    } catch (e) {
        console.log(e);
        return e;
    }
};
const deletePhoto = async (DocId, PhotoId, PhotoTitle) => {
    try {
        info("Espera",3);
        const response = await firebase.firestore().collection("Content").doc(DocId).get();
        const Data = response.data().contentArray
        await firebase
            .firestore()
            .collection(`Content`)
            .doc(DocId)
            .update({
                contentArray: Data.filter(item => item.id !== PhotoId)
            });
        await deleteImage(firebase, "Images", PhotoTitle)
        success("Pin eliminado");
    } catch {
        error("Error al eliminar Pin");
    }
}
export { deletePhoto };