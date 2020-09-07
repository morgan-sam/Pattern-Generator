import React from "react";

const ColorSliders = (props) => {
  const { color, setColor } = props;
  return (
    <div className="slider-container">
      <span>Hue: {color.hue}</span>
      <input
        type="range"
        min="0"
        max="359"
        value={color.hue}
        onChange={(e) => setColor({ ...color, hue: e.target.value })}
        step="1"
      />
      <span>Saturation: {color.saturation}</span>
      <input
        type="range"
        min="0"
        max="100"
        value={color.saturation}
        onChange={(e) => setColor({ ...color, saturation: e.target.value })}
        step="1"
      />
      <span>Lightness: {color.lightness}</span>
      <input
        type="range"
        min="0"
        max="95"
        value={color.lightness}
        onChange={(e) => setColor({ ...color, lightness: e.target.value })}
        step="1"
      />
    </div>
  );
};

export default ColorSliders;
