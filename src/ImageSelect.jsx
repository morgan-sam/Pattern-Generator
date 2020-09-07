import React from "react";
import { ReactComponent as Blob } from "./svg/blob.svg";
import { ReactComponent as Heart } from "./svg/heart.svg";
import { ReactComponent as Star } from "./svg/star.svg";
import "./imageSelect.css";

const ImageSelect = (props) => {
  return (
    <div className="svg-button-container">
      <Blob className="svg-button" />
      <Heart className="svg-button" />
      <Star className="svg-button" />
    </div>
  );
};

export default ImageSelect;
