import React from "react";
import { Navbar, Footer, HomeContainer } from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "my-customhook-collection";
const PublicSwitch = () => {
  const mediaQuery = useMediaQuery("(max-width: 600px");
  const MainMenu = mediaQuery ? <Footer /> : <Navbar />;
  return (
    <Switch>
      <>
        {MainMenu}
        <div className="Container-container-styles">
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/home/:id" component={() => <h1>CardView</h1>} />
          <Route exact path="/gallery" component={() => <h1>Gallery</h1>} />
          <Route exact path="/messages" component={() => <h1>Messages</h1>} />
          <Route exact path="/settings" component={() => <h1>Settings</h1>} />
          <Route exact path="/search" component={() => <h1>Search</h1>} />
          <Redirect to="/home" />
        </div>
      </>
    </Switch>
  );
};

export default PublicSwitch;
