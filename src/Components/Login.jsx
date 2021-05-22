import React from "react";
import { UserGoogleAuth } from "../Firebase/FirebaseAuth";
import GoogleButton from "react-google-button";
const Login = () => {
  return (
    <div className="Login-container">
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div id="stars-group-4"></div>
      <div id="stars-group-5"></div>
      <div id="stars-group-6"></div>
      <div className="Login-auth-section">
        <h3 style={{color:"white"}}><b><i>Login</i></b></h3>
        <br/>
        <br/>
        <GoogleButton onClick={UserGoogleAuth} />
      </div>
    </div>
  );
};
export default Login;
