import React, { useState } from "react";
import { Popover, Button, Drawer, Tooltip, Popconfirm } from "antd";
import { useMediaQuery } from "my-customhook-collection";
import {
  EllipsisOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
const CardSongsView = ({
  children,
  Title = "",
  ChannelUrlImage,
  userInfo,
  ItemId,
}) => {
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
    <>
    <Popconfirm
      placement="topLeft"
      title={"¿Quieres eliminar el Pin?"}
      onConfirm={()=>alert("si")}
      okText="Yes"
      cancelText="No"
    >
      <Button
        style={{ width: "100%", display: "flex", alignItems: "center" }}
        size="large"
        danger
      >
        <DeleteOutlined style={{ marginRight: "5px" }} />
        Eliminar Pin
      </Button>
    </Popconfirm>
    </>
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
                  marginRight: "10px",
                  zIndex: "1000",
                }}
              />
              {Title && (
                <Tooltip placement="top" title={Title}>
                  <b style={{ textOverflow: "clip" }}>
                    {Title.length >= 23 ? `${Title.slice(0, 23)}...` : Title}
                  </b>
                </Tooltip>
              )}
              <br />
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
              <button className="CardContainer-button-style hover-button--on">
                  <EditOutlined />
                </button>
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
              zIndex={1010}
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
                    <b>Editar</b>
                </h5>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default CardSongsView;
