import React from "react";
import { UserGoogleAuth } from "../Firebase/FirebaseAuth";
import GoogleButton from "react-google-button";
const Login = () => {
  return (
    <div className="Login-container">
      <div className="Login-banner">
        <h3><b>Login</b></h3>
      </div>
      <div className="Login-auth-section">
        <GoogleButton onClick={UserGoogleAuth} />
      </div>
    </div>
  );
};
export default Login;
