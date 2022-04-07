const btnStart=document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')

btnStart.addEventListener('click', startChangeBgColor);
btnStop.addEventListener('click', stopChangeBgColor);
let interval = null;

// btnStart.setAttribute

function startChangeBgColor() {
    btnStart.setAttribute('disabled', true)
    interval = setInterval(changeColor, 1000) 
    btnStop.removeAttribute('disabled')
}

function stopChangeBgColor() {
    btnStart.removeAttribute('disabled')
    clearInterval(interval)
    btnStop.setAttribute('disabled', true)
}

function changeColor() {
    document.body.style.backgroundColor=getRandomHexColor()
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}