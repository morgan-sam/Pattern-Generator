import React, { useState, useEffect } from "react";
import "./app.css";
import { loadImage, drawCanvasBackground, drawPattern } from "./draw";
import heart from "./svg/heart.svg";

import ColorSliders from "./ColorSliders";
import ParameterSliders from "./ParameterSliders";
import ImageSelect from "./ImageSelect";

const App = () => {
  const [img, setImg] = useState(null);
  const [color, setColor] = useState({
    hue: 0,
    saturation: 80,
    lightness: 70,
  });
  const [params, setParams] = useState({
    canvas_width: 485,
    canvas_height: 755,
    shape_scale: 5,
    x_gap: 2,
    y_gap: 2,
    coverage: 100,
    random_x_offset: 0,
    random_y_offset: 0,
    rotation_lower: -40,
    rotation_upper: 40,
  });

  useEffect(() => {
    if (img) {
      drawCanvasBackground(color, params);
      drawPattern(img, params);
    }
  }, [color, img, params]);

  const loadImageToState = async (svg) => {
    const loadedImage = await loadImage(svg);
    setImg(loadedImage);
  };

  useEffect(() => {
    loadImageToState(heart);
  }, []);

  return (
    <div className="app">
      <div className="top-left-options">
        <h2>Shape</h2>
        <ImageSelect {...{ loadImageToState }} />
        <h2>Color</h2>
        <ColorSliders {...{ color, setColor }} />
        <h2>Parameters</h2>
        <ParameterSliders {...{ params, setParams }} />
      </div>
      <canvas
        id="myCanvas"
        width={params.canvas_width}
        height={params.canvas_height}
      />
    </div>
  );
};

export default App;
