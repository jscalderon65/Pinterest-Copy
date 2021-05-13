import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
const SettingsProfile = ({ userInfo: { displayName } }) => {
  let history = useHistory();
    useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div className="SettingsProfile-container">
      <div className="SettingsProfile-profile-info-container animate__animated animate__fadeInDown">
        <div>
          <b>{displayName[0]}</b>
        </div>
        <div>
          <b>{displayName.toLowerCase()}</b>
        </div>
      </div>
      <div
        className="SettingsProfile-cards-info-container 
            animate__animated animate__fadeInUp"
      >
        <div
          className="SettingsProfile-cards-info-container-songs"
          onClick={() => history.push("/settings/songs")}
        >
          <i class="fas fa-music fa-3x"></i>
          <br/>
          <h4><b>Canciones</b></h4>
        </div>
        <div onClick={() => history.push("/settings/photos")}>
        <i class="far fa-images fa-3x"></i>
          <br/>
          <h4><b>Fotos</b></h4>
          </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default SettingsProfile;
