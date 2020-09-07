import React, { useState, useEffect } from "react";
import "./app.css";
import { loadImage, drawCanvasBackground, drawPattern } from "./draw";
import shape from "./shape.svg";

const App = () => {
  const [img, setImg] = useState(null);
  const [params, setParams] = useState({
    canvas_width: 485,
    canvas_height: 755,
    shape_scale: 5,
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
        <span>Canvas Width</span>
        <input type="range" min="1" max="100" value="50" class="slider" />
        <span>Canvas Height</span>
        <input type="range" min="1" max="100" value="50" class="slider" />
        <span>Shape Scale</span>
        <input type="range" min="1" max="100" value="50" class="slider" />
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
