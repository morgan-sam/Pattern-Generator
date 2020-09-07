const SHAPE_SCALE = 2.8;

export const loadImage = async (imgURL) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imgURL;
  });
};

const getContext = () => document.getElementById("myCanvas").getContext("2d");

export const drawCanvasBackground = (CANVAS_WIDTH, CANVAS_HEIGHT) => {
  var ctx = getContext();
  ctx.fillStyle = "#FF0066";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

export const drawPattern = (img, CANVAS_WIDTH, CANVAS_HEIGHT) => {
  var width = img.width / SHAPE_SCALE;
  var height = img.height / SHAPE_SCALE;
  const perRow = Math.round(CANVAS_WIDTH / width);
  const perColumn = Math.round(CANVAS_HEIGHT / height);
  for (let i = 0; i < perRow * perColumn; i++) {
    const x = (i % perRow) * width + width / 2;
    const y = Math.floor(i / perRow) * height + height / 2;
    const rotation = Math.random() * 360;
    drawSvg(img, x, y, rotation, width, height);
  }
};

const drawSvg = (img, x, y, rotation, width, height) => {
  var ctx = getContext();
  ctx.translate(x, y);
  ctx.rotate(degreesToRadians(rotation));
  ctx.drawImage(img, -width / 2, -height / 2, width, height);
  ctx.rotate(-degreesToRadians(rotation));
  ctx.translate(-x, -y);
};

const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
const radiansToDegrees = (radians) => (radians * 180) / Math.PI;
