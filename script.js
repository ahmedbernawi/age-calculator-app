// Get the necessary DOM elements
const dayInput = document.getElementById('dayOut');
const monthInput = document.getElementById('monthOut');
const yearInput = document.getElementById('yearOut');
const calculateButton = document.getElementById('calculatorBt');
const dayOutput = document.querySelector('.output h1:last-child span');
const monthOutput = document.querySelector('.output h1:nth-child(2) span');
const yearOutput = document.querySelector('.output h1:first-child span');
const errorMessages = document.querySelectorAll('.error');

// Function to calculate the age
function calculateAge() {
const birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
const today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if (months < 0 || (months === 0 && days < 0)) {
years--;
months += 12;
}

if (days < 0) {
const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
days += prevMonth.getDate();
months--;
}

dayOutput.textContent = days;
monthOutput.textContent = months;
yearOutput.textContent = years;
}

// Function to handle input validation
function validateInput() {
let isValid = true;

// Validate day
if (dayInput.value < 1 || dayInput.value > 31) {
errorMessages[0].textContent = 'Must be a valid day';
isValid = false;
} else {
errorMessages[0].textContent = '';
}

// Validate month
if (monthInput.value < 1 || monthInput.value > 12) {
errorMessages[1].textContent = 'Must be a valid month';
isValid = false;
} else {
errorMessages[1].textContent = '';
}

// Validate year
if (yearInput.value < 1900 || yearInput.value > new Date().getFullYear()) {
errorMessages[2].textContent = 'Must be a valid year';
isValid = false;
} else {
errorMessages[2].textContent = '';
}

return isValid;
}

// Event listener for the calculate button
calculateButton.addEventListener('click', () => {
if (validateInput()) {
calculateAge();
}
});