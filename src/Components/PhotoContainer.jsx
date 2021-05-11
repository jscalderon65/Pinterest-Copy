import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import { firebase } from "../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { CardContainer } from "./index.js";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { animateScroll as scroll } from "react-scroll";
const HomeContainer = ({userInfo}) => {
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  useEffect(() => {
    Data &&
      setDataInfo(
        Data.reduce((acc, prev) => {
          let [...examples] = prev.contentArray;
          return [...acc, ...examples];
        }, []).filter(item=>item.Type==="photo")
      );
  }, [Data]);
  console.log(userInfo);
  return Data ? (
    <>
      <div className="HomeContainer-home-container  animate__animated animate__fadeIn">
        <ResponsiveMasonry
          className="masonry"
          columnsCountBreakPoints={{ 350: 2, 800: 3, 1100: 4 }}
        >
          <Masonry gutter="15px" columnsCount={4}>
            {DataInfo.map((item) => (
              <CardContainer
                Title={item.Title}
                ChannelUrlImage={userInfo.photoURL}
                key={item.Date}
                ImageHref={item.PhotoUrl.urlImagen}
                MainUrl={item.PhotoUrl.urlImagen}
              >
                <Link to={`/home/${item.id}`}>
                <img
                    className="CardContainer-gallery_img"
                    src={item.PhotoUrl.urlImagen}
                    alt={item.Title}
                  />
                </Link>
              </CardContainer>
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
};

export default HomeContainer;