//Declaring variables
const drawFieldEl = document.getElementById('draw-field');
const btnRainbow = document.getElementById('rainbow');
const btnDefault = document.getElementById('default');
const btnEraser = document.getElementById('eraser');
const btnSmallSize = document.getElementById('small-size');
const btnMediumSize = document.getElementById('medium-size');
const btnLargeSize = document.getElementById('large-size');
let size, color, currentMode;
let mouseDown = false;

// Events on-page
//
//Events needed for drawing when you click, hold and move your mouse.
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Events needed for changing field size from small to large
btnSmallSize.addEventListener('click', () => {
  size = 15;
  drawFieldEl.innerHTML = ''; // Its reset field each team when you change drawing field size
  fieldSize();
});
btnMediumSize.addEventListener('click', () => {
  size = 75;
  drawFieldEl.innerHTML = '';
  fieldSize();
});
btnLargeSize.addEventListener('click', () => {
  size = 150;
  drawFieldEl.innerHTML = '';
  fieldSize();
});

//Events needed for changing color mode when drawing
btnRainbow.addEventListener('click', () => {
  currentMode = 'rainbow';
});
btnDefault.addEventListener('click', () => {
  currentMode = 'default';
});
btnEraser.addEventListener('click', () => {
  currentMode = 'eraser';
});

//Function to draw on field
function draw(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === 'default') {
    e.target.style.backgroundColor = '#000000';
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe';
  }
}

//Function to adjust Draw Field size
function fieldSize() {
  drawFieldEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawFieldEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const createDrawPixel = document.createElement('div');
    createDrawPixel.className = 'paint-pixel';
    createDrawPixel.addEventListener('mouseover', draw);
    createDrawPixel.addEventListener('mousedown', draw);
    drawFieldEl.appendChild(createDrawPixel);
  }
}
