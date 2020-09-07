import React from "react";

const ColorSliders = (props) => {
  const { color, setColor } = props;
  return [
    <span>Hue:</span>,
    <input
      type="range"
      min="0"
      max="359"
      value={color.hue}
      onChange={(e) => setColor({ ...color, hue: e.target.value })}
      step="1"
    />,
    <span>Saturation:</span>,
    <input
      type="range"
      min="0"
      max="100"
      value={color.saturation}
      onChange={(e) => setColor({ ...color, saturation: e.target.value })}
      step="1"
    />,
    <span>Lightness:</span>,
    <input
      type="range"
      min="20"
      max="55"
      value={color.lightness}
      onChange={(e) => setColor({ ...color, lightness: e.target.value })}
      step="1"
    />,
  ];
};

export default ColorSliders;
