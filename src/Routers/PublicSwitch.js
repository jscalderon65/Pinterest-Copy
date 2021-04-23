import React from "react";
import { BackTop } from 'antd';
import { Navbar, Footer, HomeContainer, SettingsProfile } from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "my-customhook-collection";
const PublicSwitch = () => {

  const mediaQuery = useMediaQuery("(max-width: 600px");
  const MainMenu = mediaQuery ? <Footer /> : <><BackTop /> <Navbar /> </>;

  return (
    <Switch>
      <>
        {MainMenu}
        <div id="chi" className="Container-container-styles">
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/home/:id" component={() => <h1>CardView</h1>} />
          <Route exact path="/gallery" component={() => <h1>Gallery</h1>} />
          <Route exact path="/messages" component={() => <h1>Messages</h1>} />
          <Route exact path="/settings" component={SettingsProfile} />
          <Route exact path="/search" component={() => <h1>Search</h1>} />
        </div>
      </>
      <Redirect to="/home" />
    </Switch>
  );
};

export default PublicSwitch;
