import React from 'react';
import PublicSwitch from './PublicSwitch'
import {BrowserRouter} from 'react-router-dom';
const MainRouter = () => {
    return (
        <BrowserRouter>
         <PublicSwitch/>
        </BrowserRouter>
    )
}

export default MainRouter
