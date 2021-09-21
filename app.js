const board = document.querySelector('#board');
const colors = [
  'violet',
  'indigo',
  'blue',
  'green',
  'olive',
  'yellow',
  'orange',
  'red'
];
const SQUARES_NUMBER = 1200;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  let colors;
  colors = getRandomColor();
  element.style.backgroundColor = colors;
  element.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
