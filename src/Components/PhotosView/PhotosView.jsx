import React, { useEffect, useState } from "react";
import { Empty } from "antd";
import { animateScroll as scroll } from "react-scroll";
import NavbarSongsView from "../NavbarSongsView";
import { useHistory } from "react-router-dom";
import LoadingIcon from "../LoadingIcon";
import { firebase } from "../../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
import CardPhotosView from "./CardPhotosView";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const SongsView = ({ userInfo }) => {
  const history = useHistory();
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  const PlusFunction = () => history.push("/pin-builder/photos");
  useEffect(() => {
    Data &&
      Data.filter((item) => item.id === userInfo.uid).length > 0 &&
      setDataInfo(
        Data.filter((item) => item.id === userInfo.uid)[0].contentArray.filter(
          (item) => item.Type === "photo"
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
        NavbarTitle={"Todas las imágenes"}
        PlusFunction={PlusFunction}
      />
      <br />
      <br />
      <br />
      <br />
      <div className="HomeContainer-home-container  animate__animated animate__fadeIn">

        {DataInfo.length > 0 ? (
          <ResponsiveMasonry
            className="masonry"
            columnsCountBreakPoints={{ 350: 2, 800: 3, 1100: 4 }}
          >
            <Masonry gutter="15px" columnsCount={4}>
              {DataInfo.map((item) => (
                <CardPhotosView
                  userInfo={userInfo}
                  PhotoUrl={item.PhotoUrl}
                  Title={item.Title}
                  Description={item.Description}
                  ChannelUrlImage={Data && item.PhotoUrlUser}
                  key={item.Date}
                  ImageHref={item.PhotoUrlUser}
                  MainUrl={Data && item.PhotoUrl?.urlImagen}
                  ItemId={item.id}
                >
                  <Link to={`/home/${item.id}`}>
                    <img
                      className="CardContainer-gallery_img"
                      src={Data && item.PhotoUrl?.urlImagen}
                      alt={item.Title}
                    />
                  </Link>
                </CardPhotosView>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <Empty description={<span>No tienes ningún Pin</span>} />
        )}
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

export default SongsView;
