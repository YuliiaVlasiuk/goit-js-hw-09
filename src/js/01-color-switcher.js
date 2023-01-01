function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

stopButton.disabled = true;
let timerId = null;

startButton.addEventListener('click', onClickStart);
stopButton.addEventListener('click', onClickStop);

function onClickStart() {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    stopButton.disabled = false;
    startButton.disabled = true;
  }, 1000);
}

function onClickStop() {
  stopButton.disabled = true;
  startButton.disabled = false;
  clearInterval(timerId);
}

// const span = document.querySelector(".color");

// button.addEventListener("click", onClick);

// function onClick(evt) {
// 	const randomColor = getRandomHexColor();
// 	body.style.backgroundColor = randomColor;
// 	span.textContent = randomColor;
// }
