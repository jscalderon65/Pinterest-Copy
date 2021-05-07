import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import NavbarSongsView from "../NavbarSongsView";
import { useHistory } from "react-router-dom";
import LoadingIcon from "../LoadingIcon";
import { firebase } from "../../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
import CardSongsView from "./CardSongsView";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const SongsView = ({ userInfo }) => {
  const history = useHistory();
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  const PlusFunction = () => history.push("/pin-builder/songs");
  useEffect(() => {
    Data &&
    Data.filter((item) => item.id === userInfo.uid).length>0&&
      setDataInfo(
        Data.filter((item) => item.id === userInfo.uid)[0].contentArray.filter(
          (item) => item.Type === "song"
        )
      );
  }, [Data]);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
/*   console.log(Data, DataInfo); */
  return Data ? (
    <>
      <NavbarSongsView
        NavbarTitle={"Todas las canciones"}
        PlusFunction={PlusFunction}
      />
      <br />
      <br />
      <br />
      <br />
      <div className="HomeContainer-home-container  animate__animated animate__fadeIn">
        <ResponsiveMasonry
          className="masonry"
          columnsCountBreakPoints={{ 350: 2, 800: 3, 1100: 4 }}
        >
          <Masonry gutter="15px" columnsCount={4}>
            {DataInfo.map((item) => (
              <CardSongsView
                userInfo={userInfo}
                Title={item.YoutubeInfo.title}
                ChannelUrlImage={item.YoutubeInfo.urlImageChannel}
                key={item.Date}
                ImageHref={item.YoutubeInfo.urlImageVideo}
                MainUrl={item.YoutubeUrl}
                ItemId={item.id}
              >
                <Link to="/home/id">
                  <img
                    className="CardContainer-gallery_img"
                    src={item.YoutubeInfo.urlImageVideo}
                    alt={item.YoutubeInfo.title}
                  />
                </Link>
              </CardSongsView>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <br />
      <br />
      <br />
      <br />
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
  /*     return (
        <>
        <NavbarSongsView NavbarTitle={"Todas las canciones"} PlusFunction={PlusFunction}/>        
        <div>
            Hola mundo
        </div>
        </>
    ) */
};

export default SongsView;
