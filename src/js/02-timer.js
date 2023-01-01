import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');

const startButton = document.querySelector('button[data-start]');

const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let deltaTime = 0;
let setIntervalId = 0;

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    clearInterval(setIntervalId);

    const date1 = options.defaultDate.getTime();
    // console.log(date1);

    const date2 = selectedDates[0].getTime();

    deltaTime = date2 - date1;
    console.log(date2);
    console.log(deltaTime);
    if (deltaTime > 0) {
      startButton.disabled = false;
      const timeComponents = convertMs(deltaTime);
      setDataInformation(timeComponents);
    } else {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
      dataDays.textContent = '00';
      dataHours.textContent = '00';
      dataMinutes.textContent = '00';
      dataSeconds.textContent = '00';
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

startButton.addEventListener('click', () => {
  // console.log('start', deltaTime);
  startButton.disabled = true;
  setIntervalId = setInterval(() => {
    if (deltaTime < 1000) {
      return;
    }
    deltaTime -= 1000;
    const timeComponents = convertMs(deltaTime);
    // console.log(timeComponents);
    setDataInformation(timeComponents);
  }, 1000);
});

function setDataInformation(timeComponents) {
  if (timeComponents.days < 99) {
    dataDays.textContent = String(timeComponents.days).padStart(2, '0');
  } else {
    dataDays.textContent = timeComponents.days;
  }
  dataHours.textContent = String(timeComponents.hours).padStart(2, '0');
  dataMinutes.textContent = String(timeComponents.minutes).padStart(2, '0');
  dataSeconds.textContent = String(timeComponents.seconds).padStart(2, '0');
}

Notiflix.Notify.init({
  position: 'center-top',
  width: '300px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 2000,
});
