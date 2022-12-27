import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');

const start = document.querySelector('button[data-start]');


const dataDays=document.querySelector('span[data-days]');
const dataHours=document.querySelector('span[data-hours]');
const dataMinutes=document.querySelector('span[data-minutes]');
const dataSeconds=document.querySelector('span[data-seconds]');

start.addEventListener('click', onClickStart)

start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date1 = options.defaultDate.getTime();
    console.log(date1);

    const date2 = selectedDates[0].getTime();

    const deltatime = date2 - date1;
    console.log(date2);
    console.log(deltatime);

    const timeComponents = convertMs(deltatime);
    console.log(timeComponents);

    if (deltatime > 0) {
      start.disabled = false;
dataDays.textContent=String(timeComponents.days).padStart(2,'0');
dataHours.textContent=String(timeComponents.hours).padStart(2,'0');
dataMinutes.textContent=String(timeComponents.minutes).padStart(2,'0');
dataSeconds.textContent=String(timeComponents.seconds).padStart(2,'0');




       } else {
    start.disabled = true;
      window.alert('Please choose a date in the future');
   
    }
  },
};

const fp = flatpickr(input, options);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onClickStart(){
 
 }


