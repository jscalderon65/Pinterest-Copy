import React from 'react';
const SettingsProfile = () => {
    return (
        <div className="SettingsProfile-container">
            <div className="SettingsProfile-profile-info-container">
                <div><b>{"j".toUpperCase()}</b></div>
                <div><b>{"jhonn sebastian".toLowerCase()}</b></div>
            </div>
            <div className="SettingsProfile-cards-info-container">
                <div>Citas</div>
                <div>Songs</div>
                <div>Photos</div>
                <div>Favorites</div>
            </div>
        </div>
    )
};
export default SettingsProfile;
