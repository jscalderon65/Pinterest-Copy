import React from "react";
import {Login} from '../Components'
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  return (
    <>
      <div className="Container-container-styles">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </>
  );
};

export default PublicSwitch;
