import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit',onClick);

function onClick(event){
  event.preventDefault()
  let position = 0;
  let delay = +form.elements.delay.value;
  const step = +form.elements.step.value;
  const amount = +form.elements.amount.value;
  const intervalId = setInterval(()=>{
    position +=1;
    if(position === amount){
      clearInterval(intervalId)
      
    }
    createPromise(position,delay).then(e=>{Notify.success(e)}).catch(b=>{Notify.failure(b)})
    delay +=step
    
},step)
}

  function createPromise(position,delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) =>{
  
      setTimeout(()=>{
        if(shouldResolve){
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
        }
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      },delay)
  });
  }
