import React, { useState, useEffect } from "react";
import "./app.css";
import { loadImage, drawCanvasBackground, drawPattern } from "./draw";
import shape from "./shape.svg";
import ParameterSliders from "./ParameterSliders";

const App = () => {
  const [img, setImg] = useState(null);
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
      <div className="slider-container">
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
