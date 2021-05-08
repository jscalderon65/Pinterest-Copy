import React from 'react';
import PrivateSwitch from "./PrivateSwitch";
import PublicSwitch from "./PublicSwitch";
import { firebase } from "../Firebase/FirebaseConfig";
import { useFirebaseUser } from "my-customhook-collection";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { Store } from "../Redux/Store";
const MainRouter = () => {
    const [userInfo,isOn] = useFirebaseUser(firebase);
    return (
        <Provider store={Store}>
        <BrowserRouter>
            {
                isOn?<PrivateSwitch userInfo={userInfo} />:<PublicSwitch />
            }
        </BrowserRouter>
        </Provider>
    )
}

export default MainRouter
