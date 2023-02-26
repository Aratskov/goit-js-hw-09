import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();

  const el = form.elements;
  let delay = +el.delay.value;
  const step = +el.step.value;
  const amount = +el.amount.value;

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(resolve => {
        Notify.success(resolve);
      })
      .catch(reject => {
        Notify.failure(reject);
      });
    delay += step;
  }
}

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
