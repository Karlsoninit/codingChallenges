const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.strokeStyle = "green";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let X = 0;
let Y = 0;
const draw = e => {
  if (!isDrawing) {
    return;
  }
  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log(ctx);
  ctx.beginPath();
  //start from
  // ctx.moveTo(X, Y);
  //go to

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [x, z] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
