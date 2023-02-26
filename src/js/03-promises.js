import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  let position = 1;

  const el = form.elements;
  let delay = +el.delay.value;
  const step = +el.step.value;
  const amount = +el.amount.value;

  result(position, delay);
  let secondStep = delay + step;
  render(position, amount, secondStep, step);
}

const render = (position, amount, secondStep, step) => {
  const intervalId = setInterval(() => {
    console.log(amount);
    console.log(position);
    position += 1;
    if (position == amount) {
      clearInterval(intervalId);
    }
    result(position, secondStep);
    secondStep += step;
  }, step);
};

const result = (position, delay) => {
  createPromise(position, delay)
    .then(resolve => {
      Notify.success(resolve);
    })
    .catch(reject=> {
      Notify.failure(reject);
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
