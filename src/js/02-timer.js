import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const inputEl = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const timerForm = document.querySelector('.timer')


btnStart.setAttribute('disabled', true)

function onBtnStart() {
    
}

const data = new Date()
// console.log(data)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const inputChooseDate=selectedDates[0].getTime()
    console.log(inputChooseDate)
    const nowDate=options.defaultDate.getTime()
    if (inputChooseDate<nowDate) {
      alert("Please choose a date in the future")
      return
    }
    const difference = inputChooseDate - nowDate
    btnStart.removeAttribute('disabled')
    btnStart.addEventListener('click', onBtnStart)
    console.log(difference)
  },
};

flatpickr(inputEl, options)

// function getDifference(){
//   const inputCHoseDate = this.selectedDates[0].bind(options).getTime()
//   console.log(inputCHoseDate)
//   const nowDate = this.options.defaultDate.getTime()
//   const difference = inputCHoseDate - nowDate
//   console.log(difference)
// }









