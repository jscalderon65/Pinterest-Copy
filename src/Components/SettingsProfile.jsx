import React,{useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { useHistory } from "react-router-dom";
const SettingsProfile = ({userInfo}) => {
    let history = useHistory();
    useEffect(()=>{
        scroll.scrollToTop();
    },[]);
    return (
        <div className="SettingsProfile-container">
            <div className="SettingsProfile-profile-info-container animate__animated animate__fadeInDown">
                <div><b>{userInfo.displayName.slice(0,1).toUpperCase()}</b></div>
                <div><b>{userInfo.displayName.toLowerCase()}</b></div>
            </div>
            <div className="SettingsProfile-cards-info-container 
            animate__animated animate__fadeInUp">
                <div onClick={()=>history.push("/settings/cites")}>Citas</div>
                <div onClick={()=>history.push("/settings/songs")}>Songs</div>
                <div onClick={()=>history.push("/settings/photos")}>Photos</div>
            </div>
        </div>
    )
};
export default SettingsProfile;
