import React, { useState, useEffect } from "react";
import "./app.css";
import { loadImage, drawCanvasBackground, drawPattern } from "./draw";
import shape from "./shape.svg";

import ColorSliders from "./ColorSliders";
import ParameterSliders from "./ParameterSliders";

const App = () => {
  const [img, setImg] = useState(null);
  const [color, setColor] = useState({
    hue: 0,
    saturation: 0,
    lightness: 0,
  });
  const [params, setParams] = useState({
    canvas_width: 485,
    canvas_height: 755,
    shape_scale: 5,
    x_gap: 1,
    y_gap: 1,
    coverage: 100,
    random_x_offset: 0,
    random_y_offset: 0,
  });

  useEffect(() => {
    if (img) {
      drawCanvasBackground(params);
      drawPattern(img, params);
    }
  }, [img, params]);

  useEffect(() => {
    (async () => {
      const loadedImage = await loadImage(shape);
      setImg(loadedImage);
    })();
  }, []);

  return (
    <div className="app">
      <div className="top-left-options">
        <ColorSliders {...{ color, setColor }} />
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
