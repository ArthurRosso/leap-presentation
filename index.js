// Initialize TouchFree
TouchFree.Init();
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Adjust canvas size to match the container
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = "black";

// Drawing functions
function setColor(color) {
  currentColor = color;
}

function startDrawing(event) {
  isDrawing = true;
  const { offsetX, offsetY } = getMousePosition(event);
  [lastX, lastY] = [offsetX, offsetY];
}

function drawOnCanvas(event) {
  if (!isDrawing) return;
  const { offsetX, offsetY } = getMousePosition(event);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(offsetX, offsetY);
  ctx.strokeStyle = currentColor; // Change color as needed
  ctx.lineWidth = 2; // Change line width as needed
  ctx.stroke();
  [lastX, lastY] = [offsetX, offsetY];
}

function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

// Clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Button to start drawing (trigger pointer event manually if needed)
function startDrawingBtn() {
  alert("Use your hand gestures to start drawing!");
  canvas.style.pointerEvents = "auto";
}

// Button to start drawing (trigger pointer event manually if needed)
function stopDrawingBtn() {
  // alert("Use your hand gestures to start drawing!");
  canvas.style.pointerEvents = null;
}

function getMousePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };
}

// Event listeners for mouse actions
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawOnCanvas);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// // Attach pointer events
canvas.addEventListener("pointerdown", startDrawing);
canvas.addEventListener("pointermove", drawOnCanvas);
canvas.addEventListener("pointerup", stopDrawing);
