import React, { useState } from "react";
import { Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
const EditModal = ({ isButton }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {isButton ? (
        <button onClick={showModal} className="CardContainer-button-style hover-button--on">
          <EditOutlined />
        </button>
      ) : (
        <h5 onClick={showModal}>
          <b>Editar</b>
        </h5>
      )}
        <Modal 
        title={null} 
        footer={null}
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        centered
        >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default EditModal;
