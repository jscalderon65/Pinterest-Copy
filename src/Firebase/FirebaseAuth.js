import { firebase } from "./FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const UserGoogleAuth =()=>{
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      success(`${user.displayName} ha iniciado sesión`);
      localStorage.setItem("isLogged", "true");
      })
    .catch(() => {
      error(`Se ha presentado un error al inicio de sesión`);
    });
}

const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(()=>localStorage.setItem("isLogged", "false"))
      .catch(() => {
        error(`Se ha presentado un error al cerrar sesión`, 3);
      });
  };
export {logout,UserGoogleAuth}
