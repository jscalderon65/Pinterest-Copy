import React, { useState } from "react";
import { useForm } from "my-customhook-collection";
const PhotosBuilder = () => {
  const [{ TitleValue }, onChangeInputValue] = useForm({
    TitleValue: "",
  });
  const [titleBlur, setTitleBlur] = useState(false);
  const titleBlurState = () => {
    setTitleBlur(!titleBlur);
  };
  return (
    <form
      className="PinBuilder-form"
      id="my-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        value={TitleValue}
        name="TitleValue"
        onChange={onChangeInputValue}
        minLength="1"
        placeholder="Añade un título"
        autoComplete="off"
        className="PinBuilder-input-title"
        type="text"
        maxLength="100"
        required
        onBlur={titleBlurState}
        onFocus={titleBlurState}
      />
      <br />
      {titleBlur
        ? `Se mostraran los primeros 23 caracteres   ${100 - TitleValue.length}`
        : null}
    </form>
  );
};
export default PhotosBuilder;
