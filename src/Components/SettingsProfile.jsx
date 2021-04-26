import React,{useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
const SettingsProfile = () => {
    useEffect(()=>{
        scroll.scrollToTop();
    },[]);
    return (
        <div className="SettingsProfile-container">
            <div className="SettingsProfile-profile-info-container animate__animated animate__fadeInDown">
                <div><b>{"j".toUpperCase()}</b></div>
                <div><b>{"jhonn sebastian".toLowerCase()}</b></div>
            </div>
            <div className="SettingsProfile-cards-info-container 
            animate__animated animate__fadeInUp">
                <div>Citas</div>
                <div>Songs</div>
                <div>Photos</div>
                <div>Favorites</div>
            </div>
        </div>
    )
};
export default SettingsProfile;
