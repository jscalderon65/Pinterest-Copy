import { firebase } from '../../../Firebase/FirebaseConfig';
import { uploadImage } from './CloudStorageFunctions';
import moment from "moment";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const handlerImageUpload = async (Title, Description, UserInfo, ImageInfo) => {
    try{
        const { ref, file } = ImageInfo;
        await uploadImage(firebase, ref, file).then(PhotoUrl => FirestoreAddImage(Title, Description, UserInfo, PhotoUrl));
    }catch{
        error("Ha ocurrido un error");
    }

}
const FirestoreAddImage = async (Title, Description, UserInfo, PhotoUrl) => {
    try {
        moment.locale("es");
        const DocExist = await firebase
            .firestore()
            .collection(`Content`)
            .doc(UserInfo.uid).get()
        if (DocExist.exists) {
            await firebase
                .firestore()
                .collection(`Content`)
                .doc(UserInfo.uid)
                .update({
                    contentArray: firebase.firestore.FieldValue.arrayUnion({
                        Date: moment().format('[Registrado el día] D[/]MM[/]YYYY [a las]  h:mm:ss a'),
                        Description,
                        Title,
                        Type: "photo",
                        PhotoUrl,
                        UserName: UserInfo.displayName,
                        UserEmail: UserInfo.email,
                        id: JSON.stringify(new Date())
                    })
                })
            success("Imagen agregada");
        } else {
            await firebase
                .firestore()
                .collection(`Content`)
                .doc(UserInfo.uid)
                .set({
                    contentArray: firebase.firestore.FieldValue.arrayUnion({
                        Date: moment().format('[Registrado el día] D[/]MM[/]YYYY [a las]  h:mm:ss a'),
                        Description,
                        Title,
                        Type: "photo",
                        PhotoUrl,
                        UserName: UserInfo.displayName,
                        UserEmail: UserInfo.email,
                        id: JSON.stringify(new Date())
                    })
                })
            success("Imagen agregada");
        }
    } catch (e) {
        error("Error");
        console.log(e);
    }
}
export { FirestoreAddImage, handlerImageUpload };