const ID_INPUT_DOB  = "dob";
const ID_BTN_SUBMIT = "btn-submit";
const CLASS_DISPLAY_MSG = ".display-msg";

const ERR_NO_INPUT = "Please enter your birth date";

const MSG_SUCCESS = "Yay, your birth date is a palindrome!";
const MSG_FAILURE = "Oops, your birth date isn't a palindrome";
const MSG_PROCESSING = "Processing...   please wait"

const STYLE_DISPLAY_BLOCK = "block";
const STYLE_DISPLAY_NONE  = "none";

const DELAY_MSECS = 2000;

var dobInputElement = document.getElementById(ID_INPUT_DOB);
var submitBtnElement = document.getElementById(ID_BTN_SUBMIT);
var displayMsgElement = document.querySelector(CLASS_DISPLAY_MSG);

function doesNotExist(item) {
    if (item === undefined || item === null) {
        return true;
    }
    if (typeof item === 'string' && item.trim().length === 0) {
        return true;
    }
    return false;
}

function displayMessage(message) {
    displayMsgElement.innerText = message;
    displayMsgElement.style.display = STYLE_DISPLAY_BLOCK;
}

function clearDisplay() {
    displayMsgElement.innerText = null;
    displayMsgElement.style.display = STYLE_DISPLAY_NONE;
}

function checkPalindrome(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll('-', '');
    reversedDateOfBirth = dateOfBirth.split('').reverse().join('');
    var isPalindrome = dateOfBirth === reversedDateOfBirth;

    if (isPalindrome === true) {
        displayMessage(MSG_SUCCESS);
    } else {
        displayMessage(MSG_FAILURE);
    }    
} 

submitBtnElement.addEventListener("click", () => {
    clearDisplay();

    var dateOfBirth = dobInputElement.value;

    if (doesNotExist(dateOfBirth)) {
        displayMessage(ERR_NO_INPUT)    
    } else {
        displayMessage(MSG_PROCESSING);
        setTimeout(() => checkPalindrome(dateOfBirth), DELAY_MSECS);        
    }
});