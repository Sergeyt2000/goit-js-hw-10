import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButtonEl = document.querySelector('button[data-start]');
const inputDateEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
startButtonEl.disabled = true;

let userSelectedDate;
let timerID;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      startButtonEl.disabled = true;
      iziToast.error({
        title: 'Error',
        position: 'topCenter',
        message: 'Please choose a date in the future',
      });
      return;
    } else {
      startButtonEl.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};
flatpickr('#datetime-picker', options);

startButtonEl.addEventListener('click', onStart);
function onStart() {
  startButtonEl.disabled = true;
  inputDateEl.disabled = true;
  console.log(userSelectedDate);

  timerID = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime;
    if (deltaTime <= 0) {
      clearInterval(timerID);
      inputDateEl.disabled = false;
      startButtonEl.disabled = false;
      return;
    }
    // console.log(convertMs(deltaTime));
    updateTimer(convertMs(deltaTime));
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

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

function pad(value) {
  return String(value).padStart(2, '0');
}
