import React, { useState } from "react";
import { useMediaQuery } from "my-customhook-collection";
import { Modal, Button, message, Input } from "antd";
import {
  UploadOutlined,
  CopyOutlined,
  WhatsAppOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const ShareModal = ({
  MainUrl,
  IsResponsive,
  onClickModal = () => console.log("click"),
}) => {
  const mediaQuery = useMediaQuery("(max-width:600px)");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
    onClickModal();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const copyButton = (id_elemento) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    message.success("Texto copiado en el portapapeles");
  };
  const shareWhatsapp = (text) => {
    window.open(
      `https://api.whatsapp.com/send?text=${text.replace("&"," ")}`
    );
  };
  return (
    <>
      {!IsResponsive ? (
        <button
          onClick={showModal}
          className="CardContainer-button-style hover-button--on"
        >
          {" "}
          <UploadOutlined />
        </button>
      ) : (
        <h5 onClick={showModal}>
          <b>Compartir</b>
        </h5>
      )}

      <Modal
        title={null}
        footer={null}
        bodyStyle={
          mediaQuery
            ? { color: "white", backgroundColor: "#323031" }
            : { color: "black" }
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={
          <CloseOutlined
            style={mediaQuery ? { color: "white" } : { color: "black" }}
          />
        }
        zIndex={1000}
      >
        <div className="ShareModal-container">
          <div className="ShareModal-title">Compartir</div>
          <div className="ShareModal-buttons">
            <WhatsAppOutlined
              onClick={() => shareWhatsapp(MainUrl)}
              style={{
                fontSize: "40px",
                border: "solid",
                borderRadius: "100%",
                padding: "8px",
                backgroundColor: "#10B418",
                color: "white",
                boxShadow: "2px 2px 10px rgba(0,0,0,.2)",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="ShareModal-copy">
            <div className="ShareModal-copy-content">
              <p id="copy-text" style={{ display: "none" }}>
                {MainUrl.toString().replace("&amp;", "&")}
              </p>
              <Input
                style={{
                  border: "none",
                  backgroundColor: mediaQuery ? "#323031" : "transparent",
                  color: mediaQuery ? "white" : "black",
                }}
                value={MainUrl.toString().replace("&amp;", "&")}
              />
              <Button
                style={{
                  marginLeft: "5px",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: mediaQuery ? "#323031" : "transparent",
                  color: mediaQuery ? "white" : "black",
                }}
                onClick={() => copyButton("copy-text")}
              >
                <CopyOutlined />
                Copiar
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ShareModal;
