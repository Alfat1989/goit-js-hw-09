const formEl = document.querySelector('form');
formEl.addEventListener('submit', onFormButtonClick);
formEl.addEventListener('input', onInputForm)

let DELAY = 0;
let STEP = 0;
let AMOUNT = 0;
let amountValue = 0;


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log('yes')
  } else {
    console.log('no')
  }
}

function onFormButtonClick(e) {
  e.preventDefault();
  return new Promise(() => {
    const timeId=setInterval(() => {
      setTimeout(() => {
      createPromise()
    }, DELAY);
    }, STEP)
  })
}

// function onInputForm(e) {
//   const newObj = {
    
//   }
  
//   DELAY=e.target
//   STEP=
//   AMOUNT=

// }










// const form = document.querySelector("form");
// form.addEventListener('submit', onStart);
// form.addEventListener('input', onInput);


// let DELAY = 0;
// let STEP = 0;
// let AMOUNT = 0;
// let amountValue = 0;


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     alert(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }

// function onStart(e){
//   e.preventDefault();
//   return new Promise(() => {
//     const time = setInterval(() => {
//       amountValue += 1;
//       if (amountValue === Number(AMOUNT)) {
//         clearInterval(time);
//       };
//       setTimeout(() => {
//         createPromise();
//       }, DELAY);
//     }, STEP);
//   });
// };

// function onInput() {
//   DELAY = form.elements.delay.value;
//   STEP = form.elements.step.value;
//   AMOUNT = form.elements.amount.value;
// };
