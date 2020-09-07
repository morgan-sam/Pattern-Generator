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
    x_gap: 1,
    y_gap: 1,
    coverage: 100,
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
        <span>Canvas Width: {params.canvas_width}</span>
        <input
          type="range"
          min="100"
          max="1250"
          value={params.canvas_width}
          onChange={(e) =>
            setParams({ ...params, canvas_width: e.target.value })
          }
        />
        <span>Canvas Height: {params.canvas_height}</span>
        <input
          type="range"
          min="100"
          max="950"
          value={params.canvas_height}
          className="slider"
          onChange={(e) =>
            setParams({ ...params, canvas_height: e.target.value })
          }
        />
        <span>Shape Scale: {params.shape_scale}</span>
        <input
          type="range"
          step="0.01"
          min="1"
          max="10"
          value={params.shape_scale}
          className="slider"
          onChange={(e) =>
            setParams({ ...params, shape_scale: e.target.value })
          }
        />
        <span>X Gap: {params.x_gap}</span>
        <input
          type="range"
          step="0.01"
          min="1"
          max="3"
          value={params.x_gap}
          className="slider"
          onChange={(e) => setParams({ ...params, x_gap: e.target.value })}
        />
        <span>Y Gap: {params.y_gap}</span>
        <input
          type="range"
          step="0.01"
          min="1"
          max="3"
          value={params.y_gap}
          className="slider"
          onChange={(e) => setParams({ ...params, y_gap: e.target.value })}
        />
        <span>Coverage: {params.coverage}</span>
        <input
          type="range"
          step="0.01"
          min="0"
          max="100"
          value={params.coverage}
          className="slider"
          onChange={(e) => setParams({ ...params, coverage: e.target.value })}
        />
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
