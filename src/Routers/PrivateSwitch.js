import React from "react";
import { BackTop } from 'antd';
import { Navbar, Footer, HomeContainer, SettingsProfile,CardView } from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "my-customhook-collection";
const PrivateSwitch = () => {

  const mediaQuery = useMediaQuery("(max-width: 600px");
  const MainMenu = mediaQuery ? <Footer /> : <><BackTop /> <Navbar /> </>;

  return (
    <>
      {MainMenu}
      <div className="Container-container-styles">
        <Switch>
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/home/:id" component={CardView} />
          <Route exact path="/gallery" component={() => <h1>Gallery</h1>} />
          <Route exact path="/messages" component={() => <h1>Messages</h1>} />
          <Route exact path="/settings" component={SettingsProfile} />
          <Route exact path="/search" component={() => <h1>Search</h1>} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};

export default PrivateSwitch;
