//Declaring variables
const paintSize = document.getElementById('paint_size').value;
const drawFieldEl = document.getElementById('drawField');

//Function to adjust Draw Field size
function drawField(size) {
  drawFieldEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawFieldEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const createDrawPixel = document.createElement('div');
    createDrawPixel.className = 'paint-pixel';
    createDrawPixel.addEventListener('mouseover', changecolor);
    createDrawPixel.addEventListener('mousedown', changecolor);
    drawFieldEl.appendChild(createDrawPixel);
  }
}
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changecolor(e) {
  console.log(e.type);
  if (e.type === 'mouseover' && mouseDown) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else {
    return;
  }
}

document.getElementById('paint_size').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    drawField(paintSize);
  }
});
