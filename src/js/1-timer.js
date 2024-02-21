import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast/dist/js/iziToast.min.js';

let userSelectedDate;
let countdownInterval;
// const dateInput = document.getElementById('#datetime-picker');

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate < new Date()) {
      startButton.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
      });
    } else {
      startButton.disabled = false;
    }
    },
  });



startButton.addEventListener("click", () => {
  startButton.disabled = true;

  const countdownElements = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
  };


  const updateTimer = () => {
    const difference = userSelectedDate - new Date();

    if (difference <= 0) {
      clearInterval(countdownInterval);
      countdownElements.days.textContent = '00';
      countdownElements.hours.textContent = '00';
      countdownElements.minutes.textContent = '00';
      countdownElements.seconds.textContent = '00';
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(difference);
    countdownElements.days.textContent = addLeadingZero(days);
    countdownElements.hours.textContent = addLeadingZero(hours);
    countdownElements.minutes.textContent = addLeadingZero(minutes);
    countdownElements.seconds.textContent = addLeadingZero(seconds);
    };

  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);

  document.getElementById('datetime-picker').disabled = true;
});

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};


