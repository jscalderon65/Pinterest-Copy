import React from "react";
import YoutubeSongBuilder from "./YoutubeSongBuilder";
import CitesBuilder from "./CitesBuilder";
import PhotosBuilder from "./PhotosBuilder";
import { useParams, Redirect } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const PinBuilder = ({userInfo}) => {
  const history = useHistory();
  const Params = useParams();
  const GoBackComponent = () => {
    history.push(`/settings/${Params.type}`);
  };
  const MainBuilder=()=>{
  return(
    Params.type === "photos"
      ? <PhotosBuilder userInfo={userInfo}/>
      : Params.type === "cites"
      ? <CitesBuilder userInfo={userInfo}/>
      : Params.type === "songs"
      ? <YoutubeSongBuilder userInfo={userInfo}/>
      : null
  )}
  return Params.type === "photos" ||
    Params.type === "cites" ||
    Params.type === "songs" ? (
    <div className="PinBuilder-container animate__animated animate__fadeIn">
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
          <button
            form="my-form"
            type="submit"
            className="PinBuilder-container-save-button"
          >
            Guardar
          </button>
        </div>
      </div>
      <div>
      <MainBuilder />
      </div>
    </div>
  ) : (
    <Redirect to="/home" />
  );
};

export default PinBuilder;
