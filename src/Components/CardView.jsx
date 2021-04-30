import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const CardView = () => {
  let history = useHistory();
  return (
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
          src="https://picsum.photos/id/237/200/300"
          alt="chi"
        />
      </div>
    </>
  );
};

export default CardView;
