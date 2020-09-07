import React, { useState, useEffect } from "react";
import { loadImage, drawCanvasBackground, drawPattern } from "./draw";
import shape from "./shape.svg";
const CANVAS_WIDTH = 485;
const CANVAS_HEIGHT = 755;

const App = () => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (img) {
      drawCanvasBackground(CANVAS_WIDTH, CANVAS_HEIGHT);
      drawPattern(img, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, [img]);

  useEffect(() => {
    (async () => {
      const loadedImage = await loadImage(shape);
      setImg(loadedImage);
    })();
  }, []);

  return <canvas id="myCanvas" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />;
};

export default App;
