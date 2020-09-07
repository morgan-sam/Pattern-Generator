import React from "react";
import Blob from "./svg/blob.svg";
import Heart from "./svg/heart.svg";
import Star from "./svg/star.svg";
import "./imageSelect.css";

const ImageSelect = (props) => {
  const { loadImageToState } = props;
  return (
    <div className="svg-button-container">
      <img
        className="svg-button"
        src={Blob}
        onClick={() => loadImageToState(Blob)}
      />
      <img
        className="svg-button"
        src={Heart}
        onClick={() => loadImageToState(Heart)}
      />
      <img
        className="svg-button"
        src={Star}
        onClick={() => loadImageToState(Star)}
      />
    </div>
  );
};

export default ImageSelect;
