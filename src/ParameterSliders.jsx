import React from "react";

const ParameterSliders = (props) => {
  const { params, setParams } = props;
  return [
    <span>Canvas Width: {params.canvas_width}</span>,
    <input
      type="range"
      min="100"
      max="950"
      value={params.canvas_width}
      onChange={(e) =>
        setParams({ ...params, canvas_width: parseInt(e.target.value) })
      }
    />,
    <span>Canvas Height: {params.canvas_height}</span>,
    <input
      type="range"
      min="100"
      max="950"
      value={params.canvas_height}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, canvas_height: parseInt(e.target.value) })
      }
    />,
    <span>Shape Scale: {params.shape_scale}</span>,
    <input
      type="range"
      step="0.01"
      min="1"
      max="10"
      value={params.shape_scale}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, shape_scale: parseInt(e.target.value) })
      }
    />,
    <span>X Gap: {params.x_gap}</span>,
    <input
      type="range"
      step="0.01"
      min="1"
      max="3"
      value={params.x_gap}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, x_gap: parseFloat(e.target.value) })
      }
    />,
    <span>Y Gap: {params.y_gap}</span>,
    <input
      type="range"
      step="0.01"
      min="1"
      max="3"
      value={params.y_gap}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, y_gap: parseFloat(e.target.value) })
      }
    />,
    <span>Coverage: {params.coverage}</span>,
    <input
      type="range"
      step="1"
      min="0"
      max="100"
      value={params.coverage}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, coverage: parseInt(e.target.value) })
      }
    />,
    <span>Random X Offset: {params.random_x_offset}</span>,
    <input
      type="range"
      step="1"
      min="-100"
      max="100"
      value={params.random_x_offset}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, random_x_offset: parseInt(e.target.value) })
      }
    />,
    <span>Random Y Offset: {params.random_y_offset}</span>,
    <input
      type="range"
      step="1"
      min="-100"
      max="100"
      value={params.random_y_offset}
      className="slider"
      onChange={(e) =>
        setParams({ ...params, random_y_offset: parseInt(e.target.value) })
      }
    />,
  ];
};

export default ParameterSliders;
