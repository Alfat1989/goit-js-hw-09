import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');
formEl.addEventListener('submit', onFormButtonClick);
formEl.addEventListener('input', onInputForm)

const inputObj = {}
function onInputForm(e) {
  inputObj[e.target.name] = Number(e.target.value)
  // console.log(inputObj)
}

let amountValue = 0;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  })
 
}


function onFormButtonClick(e) {

  e.preventDefault();
  let DELAY = inputObj.delay;
  let STEP = inputObj.step;
  let AMOUNT = inputObj.amount;
  setTimeout(() => {
    const intervalId = setInterval(() => {
      amountValue += 1;
      if (amountValue>AMOUNT) {
        clearInterval(intervalId)
        amountValue = 0;
        return
        
      }
      createPromise(amountValue, DELAY).then(result => Notify.success(result)).catch(error => Notify.failure(error))
  
    }, STEP);
    
  }, DELAY) 

}




///////////////////////////////////////////////////////////////////////////////////



// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//   }
// }

// const form = document.querySelector('form');

// let DELAY = 0;
// let STEP = 0;
// let AMOUNT = 0;
// let amountValue = 0;

// form.addEventListener('input', onInput);
// form.addEventListener('submit', onCreatePromise);

// function onInput() {
//   DELAY = form.elements.delay.value;
//   STEP = form.elements.step.value;
//   AMOUNT = form.elements.amount.value;
// }

// function onCreatePromise(e) {
//   e.preventDefault();

//   return new Promise(() => {

//     const interval = setInterval(() => {
//       amountValue += 1;

//       if (amountValue === Number(AMOUNT)) {
//         clearInterval(interval);
//       }
//         setTimeout(() => {
//           createPromise();
//         }, DELAY);
//     }, STEP);
//   })
// }





