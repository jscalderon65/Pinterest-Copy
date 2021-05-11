import React, { useState } from "react";
import { Image, Button,message,Spin } from "antd";
import { handlerImageUpload } from "./PhotosRegisterFunctions/FirebaseFunctions";
import { UploadOutlined, ClearOutlined } from "@ant-design/icons";
import { useForm } from "my-customhook-collection";
const PhotosBuilder = ({ userInfo }) => {
  const {info} = message;
  const [{ TitleValue, DescriptionValue }, onChangeInputValue, setInputValues] =
    useForm({
      TitleValue: "",
      DescriptionValue: "",
    });
  const [titleBlur, setTitleBlur] = useState(false);
  const [PrevImageUrl, setPrevImageUrl] = useState("");
  const [{ file, isFile }, setPictureUploadSecure] = useState({
    file: [],
    isFile: false,
  });
  const cancelUploadImage = () => {
    setPrevImageUrl("");
    setPictureUploadSecure({
      file: [],
      isFile: false,
    });
  };
  const titleBlurState = () => {
    setTitleBlur(!titleBlur);
  };
  const openInputFile = () => {
    document.querySelector("#file").click();
  };
  const handleUploadPicture = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setPrevImageUrl(reader.result);
    };
    setPictureUploadSecure({
      file: e.target.files[0],
      isFile: true,
    });
  };
  const submitHandler = () => {
    console.log(file, TitleValue, DescriptionValue);
    info("Espera hasta que se limpien los campos",5);
    handlerImageUpload(TitleValue, DescriptionValue, userInfo, {
      file,
      ref: "Images",
    }).then(()=>{
      cancelUploadImage();
      setInputValues({
        TitleValue: "",
        DescriptionValue: "",
      });
    });
  };
  return (
    <>
      <form
        style={{ marginBottom: "50px" }}
        className="PinBuilder-form PinBuilder-form-photo animate__animated animate__bounceIn"
        id="my-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div className="PinBuilder-form-youtube-prev-preview-video">
          {isFile ? (
            <>
              <Image
                style={{
                  width: "100%",
                  height: "250px",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
                src={PrevImageUrl}
                alt="PrevImage"
              />
            </>
          ) : (
            <div onClick={openInputFile}>
              <div>
                <UploadOutlined />
                <br />
                <input
                  style={{ display: "none" }}
                  name="file"
                  onChange={handleUploadPicture}
                  type="file"
                  id="file"
                  accept="image/*"
                  required
                />
                <p style={{ textAlign: "center" }}>Ingresa una imagen</p>
              </div>
            </div>
          )}
          <br />
          {isFile ? (
            <Button
              type="primary"
              onClick={cancelUploadImage}
              size="large"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              shape="circle"
            >
              <ClearOutlined />
            </Button>
          ) : null}
          <br />
        </div>
        <div>
          <div className="PinBuilder-profile">
            <div>
              <b>{userInfo.displayName[0]}</b>
            </div>
            <div>
              <b>{userInfo.displayName.toLowerCase()}</b>
            </div>
          </div>
          <div>
            <input
              value={TitleValue}
              name="TitleValue"
              onChange={onChangeInputValue}
              minLength="1"
              placeholder="Añade un título"
              autoComplete="off"
              className="PinBuilder-input-title"
              type="text"
              maxLength="50"
              required
              onBlur={titleBlurState}
              onFocus={titleBlurState}
            />
            <br />
            {titleBlur
              ? `Se mostraran los primeros 50 caracteres   ${
                  50 - TitleValue.length
                }`
              : null}
          </div>
          <br />
          <br />
          <input
            value={DescriptionValue}
            name="DescriptionValue"
            onChange={onChangeInputValue}
            minLength="1"
            placeholder="Añade una descripción"
            autoComplete="off"
            className="PinBuilder-input-description"
            type="text"
            maxLength="50"
          />
        </div>
      </form>
    </>
  );
};
export default PhotosBuilder;
