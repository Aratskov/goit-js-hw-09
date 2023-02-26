import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const intervalId = null;

form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  let position = 1;
  let delay = +form.elements.delay.value;
  const step = +form.elements.step.value;
  const amount = +form.elements.amount.value;

  result(position, delay);

  secondStep = delay + step;
  const intervalId = setInterval(() => {
    position += 1;
    if (position === amount) {
      clearInterval(intervalId);
    }
    result(position, secondStep);
    secondStep += step;
  }, step);
}

const result = (position, delay) => {
  createPromise(position, delay)
    .then(e => {
      Notify.success(e);
    })
    .catch(b => {
      Notify.failure(b);
    });
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
