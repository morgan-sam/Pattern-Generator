export const loadImage = async (imgURL) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imgURL;
  });
};

export const drawPattern = (img, color, params, seed) => {
  Math.seedrandom(seed);
  drawCanvasBackground(color, params);
  drawAllShapes(img, params);
};

const getContext = () => document.getElementById("myCanvas").getContext("2d");

const drawCanvasBackground = (color, params) => {
  const { hue, saturation, lightness } = color;
  const { canvas_width, canvas_height } = params;
  const ctx = getContext();
  ctx.fillStyle = `hsl(${hue},${saturation}%,${lightness}%)`;
  ctx.fillRect(0, 0, canvas_width, canvas_height);
};

const calculatePatternInfo = (img, params) => {
  const { shape_scale, canvas_width, canvas_height } = params;
  const width = img.width / shape_scale;
  const height = img.height / shape_scale;
  const perRow = Math.round(canvas_width / width);
  const perColumn = Math.round(canvas_height / height);
  return { width, height, perRow, perColumn };
};

const calculateRotation = (params) => {
  const { rotation_lower, rotation_upper } = params;
  return (
    (Math.random() - 0.5) * (rotation_upper - rotation_lower) +
    (rotation_upper + rotation_lower) / 2
  );
};

const calculateXPosition = (width, i, perRow, params) => {
  const { x_gap, random_x_offset } = params;
  return (
    (i % perRow) * width * x_gap + width / 2 + random_x_offset * Math.random()
  );
};

const calculateYPosition = (height, i, perRow, params) => {
  const { y_gap, random_y_offset } = params;
  return (
    Math.floor(i / perRow) * height * y_gap +
    height / 2 +
    random_y_offset * Math.random()
  );
};

const drawAllShapes = (img, params) => {
  const { coverage } = params;
  const { width, height, perRow, perColumn } = calculatePatternInfo(
    img,
    params
  );
  for (let i = 0; i < perRow * perColumn; i++) {
    if (Math.random() * 100 < coverage) {
      const x = calculateXPosition(width, i, perRow, params);
      const y = calculateYPosition(height, i, perRow, params);
      const rotation = calculateRotation(params);
      drawSvg(img, x, y, rotation, width, height);
    }
  }
};

const drawSvg = (img, x, y, rotation, width, height) => {
  const ctx = getContext();
  ctx.translate(x, y);
  ctx.rotate(degreesToRadians(rotation));
  ctx.drawImage(img, -width / 2, -height / 2, width, height);
  ctx.rotate(-degreesToRadians(rotation));
  ctx.translate(-x, -y);
};

const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
const radiansToDegrees = (radians) => (radians * 180) / Math.PI;
