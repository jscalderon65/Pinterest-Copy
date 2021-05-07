import { firebase } from '../../../Firebase/FirebaseConfig';
import moment from "moment";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const AddSong = async (YoutubeInfo, UserInfo,YoutubeUrl) => {
    try {
        moment.locale("es");
        const DocExist = await firebase
            .firestore()
            .collection(`Content`)
            .doc(UserInfo.uid).get()
        if(DocExist.exists){
            await firebase
                .firestore()
                .collection(`Content`)
                .doc(UserInfo.uid)
                .update({
                    contentArray: firebase.firestore.FieldValue.arrayUnion({
                        Date: moment().format('[Registrado el día] D[/]MM[/]YYYY [a las]  h:mm:ss a'),
                        YoutubeInfo,
                        YoutubeUrl,
                        UserName: UserInfo.displayName,
                        UserEmail: UserInfo.email,
                        id:JSON.stringify(new Date())
                    })
                })
            success("Canción agregada");
        }else{
            await firebase
            .firestore()
            .collection(`Content`)
            .doc(UserInfo.uid)
            .set({
                contentArray:firebase.firestore.FieldValue.arrayUnion({
                    Date: moment().format('[Registrado el día] D[/]MM[/]YYYY [a las]  h:mm:ss a'),
                    YoutubeInfo,
                    UserName: UserInfo.displayName,
                    UserEmail: UserInfo.email,
                })
            })
        success("Canción agregada");
        }
    } catch (e) {
        error("Error");
        console.log(e);
    }
}
export { AddSong };