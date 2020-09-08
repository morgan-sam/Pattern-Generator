import React, { useState, useEffect } from "react";

import Heart from "svg/heart.svg";

import ColorSliders from "jsx/ColorSliders";
import ParameterSliders from "jsx/ParameterSliders";
import ImageSelect from "jsx/ImageSelect";

import { loadImage, drawPattern } from "js/draw";

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
    if (img) drawPattern(img, color, params);
  }, [color, img, params]);

  const loadImageToState = async (svg) => {
    const loadedImage = await loadImage(svg);
    setImg(loadedImage);
  };

  useEffect(() => {
    loadImageToState(Heart);
  }, []);

  return (
    <div className="app">
      <div className="interface">
        <h1>Pattern Generator</h1>
        <div>
          <h2>Shape</h2>
          <ImageSelect {...{ loadImageToState }} />
        </div>
        <div>
          <h2>Color</h2>
          <ColorSliders {...{ color, setColor }} />
        </div>
        <div>
          <h2>Parameters</h2>
          <ParameterSliders {...{ params, setParams }} />
        </div>
      </div>
      <canvas
        id="myCanvas"
        className="canvas"
        width={params.canvas_width}
        height={params.canvas_height}
      />
    </div>
  );
};

export default App;
