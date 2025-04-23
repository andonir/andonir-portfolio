import "./paint-it.css";
import { FaEraser } from "react-icons/fa";

let painting = false;
let color, width, firstPositionX, firstPositionY;
let delAllowed = false;

const PaintIt = () => {
  return (
    <div className="paintIt-component-container">
      <div className="paintIt-container">
        <h1>Draw something!</h1>
        <canvas
          id="canvas"
          width="500px"
          height="500px"
          onMouseDown={(e) => {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            const clientRect = canvas.getBoundingClientRect();

            firstPositionX = e.clientX - clientRect.left;
            firstPositionY = e.clientY - clientRect.top;
            color = document.getElementById("inputColor").value;
            width = document.getElementById("inputWidth").value;
            painting = true;
            ctx.beginPath();
          }}
          onMouseMove={(e) => {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            const clientRect = canvas.getBoundingClientRect();
            let currentPositionX = e.clientX - clientRect.left;
            let currentPositionY = e.clientY - clientRect.top;

            if (painting && delAllowed != true) {
              draw(
                firstPositionX,
                firstPositionY,
                currentPositionX,
                currentPositionY,
                color,
                width
              );
            }
            if (delAllowed && painting) {
              ctx.lineWidth = width;
              ctx.clearRect(
                firstPositionX,
                firstPositionY,
                width * 1.5,
                width * 1.5
              );
            }

            firstPositionX = currentPositionX;
            firstPositionY = currentPositionY;
          }}
          onMouseUp={() => {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            painting = false;
            ctx.closePath();
          }}
        ></canvas>
        <div className="inputs">
          <input type="color" id="inputColor"></input>
          <input type="range" id="inputWidth" min="1" max="10"></input>
          <FaEraser
            id="eraser"
            onClick={() => {
              if (delAllowed) {
                delAllowed = false;
                eraser.classList.toggle("true");
              } else {
                delAllowed = true;
                eraser.classList.toggle("true");
              }
            }}
          ></FaEraser>
        </div>
      </div>
    </div>
  );
};

const draw = (x, y, x2, y2, color, width) => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.lineTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
};

export default PaintIt;
