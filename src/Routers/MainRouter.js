import React from 'react';
import PrivateSwitch from "./PrivateSwitch";
import PublicSwitch from "./PublicSwitch";
import { firebase } from "../Firebase/FirebaseConfig";
import { useFirebaseUser } from "my-customhook-collection";
import { BrowserRouter } from 'react-router-dom';
const MainRouter = () => {
    const [isOn] = useFirebaseUser(firebase);
    return (
        <BrowserRouter>
            {localStorage.getItem("isLogged") === "true" ?
                isOn && <PrivateSwitch /> : <PublicSwitch />
            }
        </BrowserRouter>
    )
}

export default MainRouter
