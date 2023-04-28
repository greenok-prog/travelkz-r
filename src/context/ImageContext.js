import { useState } from "react";
import ImageContextDefault from "./ImageContextDefault";
import React from "react";

const ImageContext = ({ children }) => {
  const [imageValue, setImageValue] = useState("");
  const [imageIsFull, setImageIsFull] = useState(false);

  const imageFullHandler = () => {
    setImageIsFull((imageIsFull) => !imageIsFull);
  };
  const changeImageValueHandler = (url) => {
    setImageValue(url);
  };

  return (
    <ImageContextDefault.Provider
      value={{
        url: imageValue,
        imageIsFull,
        setImage: changeImageValueHandler,
        setImageIsFull: imageFullHandler,
      }}
    >
      {children}
    </ImageContextDefault.Provider>
  );
};
export default ImageContext