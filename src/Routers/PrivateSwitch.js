import React from "react";
import { BackTop } from 'antd';
import { Navbar, Footer, HomeContainer, SettingsProfile, CardView, SongsView,  PhotosView, PinBuilder, SearchView, PhotoContainer } from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "my-customhook-collection";
const PrivateSwitch = ({ userInfo }) => {
  const mediaQuery = useMediaQuery("(max-width: 600px");
  const MainMenu = mediaQuery ? <Footer /> : <><BackTop /> <Navbar /> </>;
  return (
    <Switch>
          <>
      {MainMenu}
      <div className="Container-container-styles">
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/pin-builder/:type" component={() => <PinBuilder userInfo={userInfo} />} />
          <Route exact path="/home/:id" component={()=><CardView userInfo={userInfo}/>}/>
          <Route exact path="/gallery" component={()=>
          <PhotoContainer userInfo={userInfo} />} />
          <Route exact path="/messages" component={() => <h1>Messages</h1>} />
          <Route exact path="/settings" component={() => <SettingsProfile userInfo={userInfo} />} />
          <Route exact path="/settings/songs" component={() =><SongsView userInfo={userInfo} />} />
          <Route exact path="/settings/photos" component={PhotosView} />
          <Route exact path="/search" component={()=><SearchView userInfo={userInfo} />}/>
          <Redirect to="/home" />
      </div>
    </>
        </Switch>
  );
};

export default PrivateSwitch;
