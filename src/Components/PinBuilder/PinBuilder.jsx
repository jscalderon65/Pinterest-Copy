import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const PinBuilder = () => {
  const history = useHistory();
  const Params = useParams();
  const GoBackComponent = () => {
    history.push(`/settings/${Params.type}`);
  };

  return Params.type === "photos" ||
    Params.type === "cites" ||
    Params.type === "songs" ? (
    <div className="PinBuilder-container">
      <div>
        <div onClick={GoBackComponent} className="SongsView-plus-button">
          <LeftOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="PinBuilder-button-select">
          <div>
            {Params.type === "photos"
              ? "Fotos"
              : Params.type === "cites"
              ? "Frase"
              : Params.type === "songs"
              ? "Canción"
              : null}
          </div>
          <button className="PinBuilder-container-save-button">Guardar</button>
        </div>
      </div>
      <div></div>
    </div>
  ) : (
    <Redirect to="/home" />
  );
};

export default PinBuilder;
