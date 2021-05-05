import React, { useState, useEffect } from "react";
import { ClearOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Button } from "antd";
import getYouTubeID from "get-youtube-id";
import { useForm } from "my-customhook-collection";
const YoutubeSongBuilder = ({userInfo:{displayName}}) => {
  const { success, error } = message;
  const [{ YoutubeUrl }, onChangeInputValue, setInputValues] = useForm({
    YoutubeUrl: "",
  });
  const [urlId, setUrlId] = useState("");
  const clearHandler = () => {
    setInputValues({
      YoutubeUrl: "",
    });
  };
  const onCancelHandler = () => {
    error("url no válida");
    setInputValues({
      YoutubeUrl: "",
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUrlId(getYouTubeID(YoutubeUrl, { fuzzy: false }));
    urlId ? success("url válida") : onCancelHandler();
  };
  const onFocusInput = () => {
    document.getElementById("YoutubeUrl").focus()
  }
  useEffect(() => {
    setUrlId(getYouTubeID(YoutubeUrl, { fuzzy: false }));
  }, [YoutubeUrl]);
  return (
    <form
      className="PinBuilder-form PinBuilder-form-youtube-song animate__animated animate__bounceIn"
      id="my-form"
      onSubmit={onSubmitHandler}
    >
      {urlId ? (
        <div className="PinBuilder-form-youtube-preview-video">
          <iframe
            className="animate__animated animate__bounceIn PinBuilder-iframe"
            width="70%"
            height="90%"
            src={`https://www.youtube.com/embed/${urlId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div onClick={onFocusInput} className="PinBuilder-form-youtube-prev-preview-video">
          <div>
            <div>
              <UploadOutlined />
              <br />
              <p style={{textAlign:"center"}}>Ingresa un url de youtube válida</p>
            </div>
          </div>
        </div>
      )}
      <div className="PinBuilder-form-youtube-song-input-container">
        <div className="PinBuilder-profile">
          <div>
            <b>{displayName[0]}</b>
          </div>
          <div>
            <b>{displayName.toLowerCase()}</b>
          </div>
        </div>
        <input
          value={YoutubeUrl}
          name="YoutubeUrl"
          id="YoutubeUrl"
          onChange={onChangeInputValue}
          minLength="1"
          placeholder="Url de Youtube"
          autoComplete="off"
          className="PinBuilder-input-title"
          type="text"
          maxLength="100"
          required
        />
        {YoutubeUrl ? (
          <>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="primary"
                onClick={clearHandler}
                size="large"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                shape="circle"
              >
                <ClearOutlined />
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </form>
  );
};
export default YoutubeSongBuilder;
