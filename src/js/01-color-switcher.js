function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartGenerateColors);
stopBtn.addEventListener('click', onStopGenerateColors);

function onStartGenerateColors() {
    timerId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function onStopGenerateColors() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.style.padding = "10px";
startBtn.style.marginLeft = "700px";
startBtn.style.marginTop = "200px";
startBtn.style.cursor = "pointer";
stopBtn.style.cursor = "pointer";
stopBtn.style.padding = "10px";