import React from 'react';
import PrivateSwitch from "./PrivateSwitch";
import PublicSwitch from "./PublicSwitch";
import { firebase } from "../Firebase/FirebaseConfig";
import { useFirebaseUser } from "my-customhook-collection";
import { BrowserRouter } from 'react-router-dom';
const MainRouter = () => {
    const [userInfo,isOn] = useFirebaseUser(firebase);
    return (
        <BrowserRouter>
            {
                isOn?<PrivateSwitch userInfo={userInfo} />:<PublicSwitch />
            }
        </BrowserRouter>
    )
}

export default MainRouter
