import React, { useState } from "react";
import { Popover, Button, Drawer} from "antd";
import { useMediaQuery } from "my-customhook-collection";
import {
  UploadOutlined,
  EllipsisOutlined,
  DownloadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
const CardContainer = ({ children, Title, ChannelUrlImage}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const mediaQuery = useMediaQuery("(max-width:600px)");
  const text = (
    <h5 style={{ textAlign: "left" }}>
      <b>Opciones</b>
    </h5>
  );
  const content = (
    <Button style={{ width: "100%" }} icon={<DownloadOutlined />} size="large">
      Descargar imagen
    </Button>
  );
  return (
    <div className="CardContainer-container hover-button animate__animated animate__fadeIn">
      {children}
      <div className="CardContainer-button-container">
        {!mediaQuery ? (
          <>
            <div className="CardContainer-title-container">
              <img
              className="CardContainer-img-hover"
                src={ChannelUrlImage}
                alt="No"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "100%",
                  alignSelf: "center",
                  marginRight:"10px",
                  zIndex:"1000"
                }}
              />
              <b style={{textOverflow:"clip"}}>
               {Title.length>=23?`${Title.slice(0,23)}...`:Title}
              </b>
            <br />
            <button className="CardContainer-button-style hover-button--on">
              <UploadOutlined />
            </button>
            <Popover
              placement="topRight"
              title={text}
              content={content}
              trigger="click"
            >
              <button className="CardContainer-button-style hover-button--on">
                <EllipsisOutlined />
              </button>
            </Popover>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={showDrawer}
              className="CardContainer-button-style hover-button--on"
            >
              <EllipsisOutlined />
            </button>
            <Drawer
              title={null}
              closable={false}
              onClose={onClose}
              placement="bottom"
              visible={visible}
              bodyStyle={{
                backgroundColor: "#282829",
                color: "white",
                padding: "0px",
              }}
            >
              <div className="CardContainer-title-drawer">
                <CloseOutlined
                  style={{
                    fontSize: "25px",

                    color: "#909090",
                  }}
                  onClick={onClose}
                />
                <h5>
                  <b> Opciones </b>
                </h5>
              </div>
              <div className="CardContainer-drawer-content">
                <h5>
                  <b>Descargar Imagen</b>
                </h5>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
