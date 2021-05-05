import React from "react";
import { useMediaQuery } from "my-customhook-collection";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const NavbarSongsView = ({ NavbarTitle, PlusFunction }) => {
  let history = useHistory();
  const mediaQuery = useMediaQuery("(max-width: 600px)");
  return (
    <>
    <div className="SongsView-navbar-container">
      <div className="SongsView-navbar-title">
        {mediaQuery && (
          <LeftOutlined
            onClick={() => history.push("/settings")}
            style={{ justifySelf: "start", cursor: "pointer" }}
          />
        )}
        <h4>
          <b>{NavbarTitle}</b>
        </h4>
      </div>
      <div className="SongsView-plus-button" onClick={PlusFunction}>
        <PlusOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
    </>
  );
};
export default NavbarSongsView;
