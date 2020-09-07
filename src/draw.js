export const loadImage = async (imgURL) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imgURL;
  });
};

const getContext = () => document.getElementById("myCanvas").getContext("2d");

export const drawCanvasBackground = (color, params) => {
  const { hue, saturation, lightness } = color;
  const { canvas_width, canvas_height } = params;
  const ctx = getContext();
  ctx.fillStyle = `hsl(${hue},${saturation}%,${lightness}%)`;
  ctx.fillRect(0, 0, canvas_width, canvas_height);
};

export const drawPattern = (img, params) => {
  const {
    shape_scale,
    canvas_width,
    canvas_height,
    x_gap,
    y_gap,
    coverage,
    random_x_offset,
    random_y_offset,
    rotation_lower,
    rotation_upper,
  } = params;
  const width = img.width / shape_scale;
  const height = img.height / shape_scale;
  const perRow = Math.round(canvas_width / width);
  const perColumn = Math.round(canvas_height / height);
  for (let i = 0; i < perRow * perColumn; i++) {
    if (Math.random() * 100 < coverage) {
      const x =
        (i % perRow) * width * x_gap +
        width / 2 +
        random_x_offset * Math.random();
      const y =
        Math.floor(i / perRow) * height * y_gap +
        height / 2 +
        random_y_offset * Math.random();

      const rotation =
        (Math.random() - 0.5) * (rotation_upper - rotation_lower);
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
