import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const inputEl = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const timerForm = document.querySelector('.timer')

btnStart.addEventListener('click', onBtnStart)

function onBtnStart() {
    console.log(inputEl.value)
}

const data = new Date()
console.log(data)

flatpickr(inputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    }
})



