import React from "react";
import { UserGoogleAuth } from '../Firebase/FirebaseAuth';
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  return (
    <>
      <div className="Container-container-styles">
        <Switch>
          <Route exact path="/login" component={() => <button onClick={UserGoogleAuth}>login</button>} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </>
  );
};

export default PublicSwitch;
