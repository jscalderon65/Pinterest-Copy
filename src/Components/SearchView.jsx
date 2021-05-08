import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { firebase } from "../Firebase/FirebaseConfig.js";
import { useOnSnapshotCollection } from "my-customhook-collection";
const SearchView = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Content");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  const { InputSearchValue } = useSelector((state) => state.search);
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
  const CoursesFiltered = Data && getPinsByTitle(InputSearchValue, DataInfo);
  console.log(DataInfo);
  return (
    <div>
      <div className="SearchView-navbar-container animate__animated animate__bounceInDown">
        <input></input>
      </div>
      <br />
      <h1>{InputSearchValue}</h1>
      {JSON.stringify(CoursesFiltered)}
    </div>
  );
};
export default SearchView;
