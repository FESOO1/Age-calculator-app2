const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const acOutputYears = document.getElementById('acOutputYears');
const acOutputMonths = document.getElementById('acOutputMonths');
const acOutputDays = document.getElementById('acOutputDays');
const submitButton = document.getElementById('submitButton');
const currentDate = new Date();
let storedYear;
let storedMonth;
let storedDay;

// CALCULATE AGE FUNCTION

function calculateAge() {
    storedYear = currentDate.getFullYear() - yearInput.value;
    storedMonth = currentDate.getMonth() - monthInput.value + 1;
    storedDay = storedYear * 365.24;
    acOutputYears.textContent = storedYear  + 'years';
    acOutputMonths.textContent = 12 * storedYear + storedMonth + 'months';
    acOutputDays.textContent = storedDay + 'days';
};

// INTIALIZE THE SUBMIT BUTTON

submitButton.addEventListener('click', calculateAge);

console.log(currentDate.getMonth())