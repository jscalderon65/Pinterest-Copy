import React, { useState } from "react";
import { Modal, Input, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useForm, useMediaQuery } from "my-customhook-collection";
import { editPhoto } from "./PhotosViewFunctions/FirebaseFunctions";
const EditModal = ({
  isButton,
  ItemId,
  Description,
  Title,
  UserId,
  onClose,
}) => {
  const mediaQuery = useMediaQuery("(max-width:600px)");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [{ NewTitle, NewDescription }, onInputChange] = useForm({
    NewTitle: Title,
    NewDescription: Description,
  });
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    editPhoto(UserId, ItemId, NewTitle, NewDescription);
  };
  return (
    <>
      {isButton ? (
        <button
          onClick={showModal}
          className="CardContainer-button-style hover-button--on"
        >
          <EditOutlined />
        </button>
      ) : (
        <h5
          onClick={() => {
            showModal();
            onClose();
          }}
        >
          <b>Editar</b>
        </h5>
      )}
      <Modal
        title={null}
        footer={
          NewTitle.trim() !== Title || NewDescription.trim() !== Description
            ? [
                <button
                  form="my-form"
                  type="submit"
                  className="PinBuilder-container-save-button"
                >
                  Guardar
                </button>,
              ]
            : null
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={
          mediaQuery
            ? { color: "white", backgroundColor: "#323031", marginTop: "100px" }
            : { color: "black", marginTop: "120px" }
        }
      >
        <form id="my-form" onSubmit={onSubmitHandler}>
          <Typography.Title
            style={mediaQuery ? { color: "white" } : { color: "black" }}
            level={3}
            align="center"
          >
            Edición de Pin
          </Typography.Title>
          <Typography.Title
            style={mediaQuery ? { color: "white" } : { color: "black" }}
            level={5}
          >
            Título{" "}
          </Typography.Title>
          <Input
            name="NewTitle"
            value={NewTitle}
            onChange={onInputChange}
            autoComplete="off"
            minLength="1"
            maxLength="50"
            style={!mediaQuery ? { color: "white" } : { color: "black" }}
            required
          />
          <br />
          <br />
          <Typography.Title
            style={mediaQuery ? { color: "white" } : { color: "black" }}
            level={5}
          >
            Descripción
          </Typography.Title>
          <Input
            name="NewDescription"
            value={NewDescription}
            autoComplete="off"
            maxLength="50"
            onChange={onInputChange}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
