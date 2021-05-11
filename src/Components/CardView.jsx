import React,{useState,useEffect} from "react";
import LoadingIcon from "./LoadingIcon";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory,useParams } from "react-router-dom";
import { firebase } from "../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
const CardView = () => {
  let history = useHistory();
  const Params = useParams();
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    Data &&
      setDataInfo(
        Data.reduce((acc, prev) => {
          let [...examples] = prev.contentArray;
          return [...acc, ...examples];
        }, []).filter(item=>item.id===Params.id)[0]
      );
  }, [Data]);
  console.log(DataInfo);
  return (
    Data?<>
      <div
        className="CardView-back-button"
        onClick={() => history.push("/home")}
      >
        <ArrowLeftOutlined style={{ fontSize: "30px" }} />
      </div>
      <div className="CardView-container">
        <img
          className="CardView-img"
          src={Data&&DataInfo.YoutubeInfo?.urlImageVideo}
          alt={DataInfo.Title}
        />
        {Data&&JSON.stringify(DataInfo)}
      </div>
    </>:<>
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
