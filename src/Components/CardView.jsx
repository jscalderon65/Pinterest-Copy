import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import { Avatar } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { firebase } from "../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
import ShareModal from "./ShareModal";
const CardView = () => {
  let history = useHistory();
  const Params = useParams();
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  const GoToLink =( url )=>{
      window.open(url);
  }
  useEffect(() => {
    Data &&
      setDataInfo(
        Data.reduce((acc, prev) => {
          let [...examples] = prev.contentArray;
          return [...acc, ...examples];
        }, []).filter((item) => item.id === Params.id)[0]
      );
  }, [Data]);
  console.log(DataInfo);
  return Data ? (
    <>
      <div
        className="CardView-back-button"
        onClick={() => history.push("/home")}
      >
        <ArrowLeftOutlined style={{ fontSize: "30px" }} />
      </div>
      <div className="CardView-container">
        <img
          className="CardView-img"
          src={Data && DataInfo.YoutubeInfo?.urlImageVideo}
          alt={DataInfo.Title}
        />
        <div className="CardView-content">
          <div className="CardView-content-buttons">
          <ShareModal MainUrl={DataInfo.YoutubeUrl}/>
          <button
            className="PinBuilder-container-save-button"
          >

            {DataInfo.Type === "photos"
              ? "Fotos"
              : DataInfo.Type === "song"
              ? "Canción"
              : null}
          </button>
          </div>
          <div className="CardView-main-info">
            <p className="CardView-main-info-title">{DataInfo.Title}</p>
            <p className="CardView-main-info-autor">Pin subido por <b>{DataInfo.UserName}</b></p>
            <p className="CardView-main-info-date">{DataInfo.Date}</p>
            <br/>
            <div className="CardView-channel-content">
              <Avatar
                size={64}
                src={Data && DataInfo.YoutubeInfo?.urlImageChannel}
              />
              {Data && DataInfo.YoutubeInfo?.channelTitle}
              <button onClick={()=>GoToLink(DataInfo.YoutubeUrl)} className="CardView-channel-content-button">Ir</button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  ) : (
    <>
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LoadingIcon />
      </div>
    </>
  );
};

export default CardView;
