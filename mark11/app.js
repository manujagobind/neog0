const SELECTOR_BIRTH_DATE = "#dob";
const SELECTOR_LUCKY_NUM  = "#lucky";
const SELECTOR_BTN_SUBMIT = "#submit";
const SELECTOR_DIV_OUTPUT = "#ans";

const ERR_PAGE_NOT_SET = "Page not set correctly";
const ERR_NO_INPUT = "Please enter both the values.";

const SUFFIX_RESULT_SUCCESS = " is a lucky number!!! 🥳🥳🥳";
const SUFFIX_RESULT_FAILURE = " is not a lucky number. 😔";

const STYLE_DISPLAY_BLOCK = "block";
const STYLE_DISPLAY_NONE  = "none";

var dobInputElement = document.querySelector(SELECTOR_BIRTH_DATE);
var luckyNumInputElement = document.querySelector(SELECTOR_LUCKY_NUM);
var submitBtnElement = document.querySelector(SELECTOR_BTN_SUBMIT);
var outputDivElement = document.querySelector(SELECTOR_DIV_OUTPUT);

function doesNotExist(item) {
    if (item === undefined || item === null) {
        return true;
    }
    if (typeof item == 'string' && item.trim().length == 0) {
        return true;
    }
    return false;
}

function clearDisplay() {
    if (!doesNotExist(outputDivElement)) {
        outputDivElement.style.display = STYLE_DISPLAY_NONE;
    }
}

function display(message) {
    if (doesNotExist(outputDivElement)) {
        alert(message);
    } else {
        outputDivElement.innerText = message;
        outputDivElement.style.display = STYLE_DISPLAY_BLOCK;
    }
}

function getSumOfDigits(number) {
    var sum = 0;
    while (number > 0) {
        sum = number % 10;
        number = parseInt(number / 10);
    }
    return sum;
}

function handleSubmit() {

    clearDisplay();

    if (doesNotExist(dobInputElement) || doesNotExist(luckyNumInputElement)) {
        display(ERR_PAGE_NOT_SET);
        return;
    }

    var dateOfBirth = dobInputElement.value;
    var luckyNumber = luckyNumInputElement.value;

    if (doesNotExist(dateOfBirth) || doesNotExist(luckyNumber)) {
        display(ERR_NO_INPUT);
        return;
    }

    dateOfBirth = new Date(dobInputElement.value);
    luckyNumber = Number(luckyNumInputElement.value);

    var date  = dateOfBirth.getDate();
    var month = dateOfBirth.getMonth() + 1;
    var year  = dateOfBirth.getFullYear();

    var sum = getSumOfDigits(date) + getSumOfDigits(month) + getSumOfDigits(year);

    if (sum % luckyNumber === 0) {
        display(luckyNumber + SUFFIX_RESULT_SUCCESS);
    } else {
        display(luckyNumber + SUFFIX_RESULT_FAILURE);
    }

    dateOfBirth = undefined;
}

submitBtnElement.addEventListener("click", handleSubmit);