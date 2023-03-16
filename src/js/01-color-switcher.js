function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    clearInterval(timerId);
});
