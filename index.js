// Initialize TouchFree
TouchFree.Init();
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let currentColor = "black";
let isDrawing = false;

// Drawing functions
function setColor(color) {
  currentColor = color;
}

// // Set canvas size to match window
// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// Function to get pointer coordinates relative to the canvas
const getPointerPosition = function (event) {
  const rect = canvas.getBoundingClientRect(); // Get canvas position
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

// Start drawing
var startDrawing = function (event) {
  console.log("start");
  const pos = getPointerPosition(event); // Get pointer position
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y); // Start drawing at pointer position
};

// Draw on the canvas
var drawOnCanvas = function (event) {
  console.log("draw");
  if (isDrawing) {
    const pos = getPointerPosition(event); // Get pointer position
    ctx.lineTo(pos.x, pos.y); // Draw to pointer position
    ctx.strokeStyle = currentColor;
    ctx.stroke();
  }
};

// Stop drawing
var stopDrawing = function () {
  isDrawing = false;
};

// Attach pointer events
canvas.addEventListener("pointerdown", startDrawing);
canvas.addEventListener("pointermove", drawOnCanvas);
canvas.addEventListener("pointerup", stopDrawing);

// Event listeners for mouse actions
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawOnCanvas);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Clear canvas
document.getElementById("clearCanvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Button to start drawing (trigger pointer event manually if needed)
document.getElementById("startDrawingBtn").addEventListener("click", () => {
  alert("Use your hand gestures to start drawing!");
});

// // let isDrawing = false;
// // let lastX = 0;
// // let lastY = 0;

// // function draw(x, y) {
// //     if (!isDrawing) return;

// //     ctx.strokeStyle = currentColor;
// //     ctx.lineWidth = 2;
// //     ctx.lineCap = "round";

// //     ctx.beginPath();
// //     ctx.moveTo(lastX, lastY);
// //     ctx.lineTo(x, y);
// //     ctx.stroke();

// //     [lastX, lastY] = [x, y];
// // }

// // controller.on("frame", function (frame) {
// //     if (frame.hands.length > 0) {
// //         const hand = frame.hands[0];
// //         const pointer = hand.pointables[1]; // Index finger

// //         if (pointer) {
// //             const pos = pointer.stabilizedTipPosition;

// //             // Convert Leap coordinates to screen coordinates
// //             const x = (pos[0] + 200) * (window.innerWidth / 400);
// //             const y = (600 - pos[1]) * (window.innerHeight / 600);

// //             // Start drawing when finger is pointing down
// //             if (pointer.direction[1] < -0.5) {
// //                 if (!isDrawing) {
// //                     isDrawing = true;
// //                     [lastX, lastY] = [x, y];
// //                 }
// //                 draw(x, y);
// //             } else {
// //                 isDrawing = false;
// //             }
// //         }
// //     }
// // });

// const canvas = document.getElementById("drawingCanvas");
// const ctx = canvas.getContext("2d");

// // Adjust canvas size to match the container
// canvas.width = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

// // Enable pointer events on canvas for drawing
// canvas.style.pointerEvents = "auto";

// function startDrawing(event) {
//   isDrawing = true;
//   const { offsetX, offsetY } = getMousePosition(event);
//   [lastX, lastY] = [offsetX, offsetY];
// }

// function draw(event) {
//   if (!isDrawing) return;
//   const { offsetX, offsetY } = getMousePosition(event);
//   ctx.beginPath();
//   ctx.moveTo(lastX, lastY);
//   ctx.lineTo(offsetX, offsetY);
//   ctx.strokeStyle = "red"; // Change color as needed
//   ctx.lineWidth = 2; // Change line width as needed
//   ctx.stroke();
//   [lastX, lastY] = [offsetX, offsetY];
// }

// function stopDrawing() {
//   isDrawing = false;
//   ctx.closePath();
// }

// function getMousePosition(event) {
//   const rect = canvas.getBoundingClientRect();
//   return {
//     offsetX: event.clientX - rect.left,
//     offsetY: event.clientY - rect.top,
//   };
// }

// // Event listeners for mouse actions
// canvas.addEventListener("mousedown", startDrawing);
// canvas.addEventListener("mousemove", draw);
// canvas.addEventListener("mouseup", stopDrawing);
// canvas.addEventListener("mouseout", stopDrawing);
