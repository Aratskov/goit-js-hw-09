const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-start]');
const stopRef = document.querySelector('[data-stop]');

startRef.addEventListener('click', clickStart);
stopRef.addEventListener('click', clickStop);

let intervalId = null;

function clickStart() {
  startRef.disabled = true;
  stopRef.disabled = false;
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function clickStop() {
  clearInterval(intervalId);
  startRef.disabled = false;
  stopRef.disabled = true;
}
