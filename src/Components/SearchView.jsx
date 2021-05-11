import React, { useEffect, useState } from "react";
import { Input,Empty } from "antd";
import LoadingIcon from "./LoadingIcon";
import { useForm } from "my-customhook-collection";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { firebase } from "../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { getInputSearchValue } from "../Redux/Actions/Search";
import { CardContainer } from "./index.js";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const SearchView = ({userInfo}) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  const { InputSearchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [{ searchInputValues }, onChangeInputValue, setInputValues] = useForm({
    searchInputValues: "",
  });
  useEffect(() => {
    Data &&
      setDataInfo(
        Data.reduce((acc, prev) => {
          let [...examples] = prev.contentArray;
          return [...acc, ...examples];
        }, [])
      );
  }, [Data]);
  const getPinsByTitle = (title = "", data) => {
    if (title === "") {
      return [];
    }
    title = title.toLowerCase();
    return data.filter((data) => data.Title.toLowerCase().includes(title));
  };
  let CoursesFiltered = Data && getPinsByTitle(InputSearchValue, DataInfo);
  console.log(DataInfo);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getInputSearchValue(searchInputValues));
  };
  const onClearInputValues = () => {
    setInputValues({
      searchInputValues: "",
    });
    dispatch(getInputSearchValue(""));
  };
  useEffect(()=>{
    return()=>onClearInputValues();
  },[])
  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="SearchView-navbar-container animate__animated animate__bounceInDown"
      >
        <Input
          style={{ borderRadius: "20px" }}
          autoComplete="off"
          size="large"
          name="searchInputValues"
          value={searchInputValues}
          onChange={onChangeInputValue}
          placeholder="Buscar ..."
          prefix={
            searchInputValues ? null : (
              <SearchOutlined className="animate__animated animate__fadeIn" />
            )
          }
          suffix={
            searchInputValues ? (
              <CloseCircleOutlined
                onClick={onClearInputValues}
                className="animate__animated animate__fadeIn"
              />
            ) : null
          }
        />
      </form>
      <br />
      {Data ? (
        <>
        <div className="HomeContainer-home-container  animate__animated animate__fadeIn">
          {CoursesFiltered.length > 0 ?(
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "900",
              }}
            >
              Resultados encontrados ({CoursesFiltered.length})
            </div>
          ):<div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "900",
          }}
        > 
          <Empty description={"Busca un pin por su título"}/>
        </div>}
          <br />
          <ResponsiveMasonry
            className="masonry"
            columnsCountBreakPoints={{ 350: 2, 800: 3, 1100: 4 }}
          >
            <Masonry gutter="15px" columnsCount={4}>
              {CoursesFiltered.map((item) => (
                item.Type==="song"?
                <CardContainer
                  Title={item.YoutubeInfo.title}
                  ChannelUrlImage={item.YoutubeInfo.urlImageChannel}
                  key={item.Date}
                  ImageHref={item.YoutubeInfo.urlImageVideo}
                  MainUrl={item.YoutubeUrl}
                >
                  <Link to={`/home/${item.id}`}>
                    <img
                      className="CardContainer-gallery_img"
                      src={item.YoutubeInfo.urlImageVideo}
                      alt={item.YoutubeInfo.title}
                    />
                  </Link>
                </CardContainer>:<CardContainer
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
        <div
          style={{
            marginTop: "150px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingIcon />
        </div>
      )}
    </div>
  );
};
export default SearchView;
