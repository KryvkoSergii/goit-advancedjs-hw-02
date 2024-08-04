import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let selectedDate;
const startBtn = document.querySelector(".timer-section button");
const selector = document.querySelector(".timer-section input#datetime-picker");

const daysFiled = document.querySelectorAll('[data-days]');
const hoursFiled = document.querySelectorAll('[data-hours]');
const minutesFiled = document.querySelectorAll('[data-minutes]');
const secondField = document.querySelectorAll('[data-seconds]');
let timerId;

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

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];

        if (selectedDate.getTime() - Date.now() < 0) {
            iziToast.show({
                title: 'Error',
                message: "Please choose a date in the future",
                position: "topRight",
                backgroundColor: 'rgb(255,0,0)'
            });
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },
};

function formatNumber(value) {
    const val = value.toString();
    return val.length === 1 ? "0" + val : val;
}

function renderNumbers() {
    const differnce = selectedDate.getTime() - Date.now();
    if (differnce > 0) {
        //render
        const calculated = convertMs(differnce);

        daysFiled[0].innerText = formatNumber(calculated['days']);
        hoursFiled[0].innerText = formatNumber(calculated['hours']);
        minutesFiled[0].innerText = formatNumber(calculated['minutes']);
        secondField[0].innerText = formatNumber(calculated['seconds']);
    } else {
        clearInterval(timerId);
        startBtn.disabled = false;
    }
}

flatpickr(selector, options);

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    timerId = setInterval(renderNumbers, 1000);
});