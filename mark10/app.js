const ID_BILl_AMT = "bill-amt";
const ID_CASH_AMT = "cash-amt";
const ID_BTN_SUBMIT = "submit";
const ID_ERR_TEXT = "error";
const ID_CELL_PREFIX = "change-"

const ERR_BILL_AMT_INVALID = "Bill amount must be a positive integer.";
const ERR_CASH_AMT_INVALID = "Cash amount must be a positive integer.";
const ERR_CASH_AMT_NOT_SUFFICIENT = "Cash amount is not sufficient."

const DENOMINATION = [2000, 500, 100, 20, 10, 5, 1];

var billAmtInputElement = document.getElementById(ID_BILl_AMT);
var cashAmtInputElement = document.getElementById(ID_CASH_AMT);
var submitButtonElement = document.getElementById(ID_BTN_SUBMIT);
var errorTextElement    = document.getElementById(ID_ERR_TEXT);

function doesNotExist(item) {
    if (item === undefined || item === null) {
        return true;
    }
    return false;
}

function displayError(message) {
    if (doesNotExist(errorTextElement)) {
        alert(message);
    } else {
        errorTextElement.innerHTML = message;
    }
}

function clearErrorDisplay() {
    if (!doesNotExist(errorTextElement)) {
        errorTextElement.innerText = null;
    }
}

function isValid(billAmount, cashAmount) {
    if (doesNotExist(billAmount) || billAmount <= 0) {
        displayError(ERR_BILL_AMT_INVALID)
        return false;
    }
    if (doesNotExist(cashAmount) || cashAmount <= 0) {
        displayError(ERR_CASH_AMT_INVALID);
        return false;
    }
    if (cashAmount < billAmount) {
        displayError(ERR_CASH_AMT_NOT_SUFFICIENT);
        return false;
    }
    return true;
}

function calculateReturnChange(billAmount, cashAmount) {
    var returnAmount = cashAmount - billAmount;
    var returnChange = DENOMINATION.slice();
    returnChange.fill(0);

    for (var denomIndex = 0 ; denomIndex < returnChange.length ; denomIndex++) {
        if (returnAmount >= DENOMINATION[denomIndex]) {
            returnChange[denomIndex] = parseInt(returnAmount / DENOMINATION[denomIndex]);
            returnAmount = returnAmount % DENOMINATION[denomIndex];
        }
    }

    return returnChange;
}

function displayReturnChange(returnChange) {
    for (var denomIndex = 0 ; denomIndex < returnChange.length ; denomIndex++) {
        // <td id="change-xx"></td>
        var tableDataElement = document.getElementById(ID_CELL_PREFIX + DENOMINATION[denomIndex]);
        if (!doesNotExist(tableDataElement)) {
            tableDataElement.innerText = returnChange[denomIndex];
        }
    }
}

function clearReturnChange() {
    for (var denomIndex = 0 ; denomIndex < DENOMINATION.length ; denomIndex++) {
        // <td id="change-xx"></td>
        var tableDataElement = document.getElementById(ID_CELL_PREFIX + DENOMINATION[denomIndex]);
        if (!doesNotExist(tableDataElement)) {
            tableDataElement.innerText = null;
        }
    }
}

function handleSubmit() {
    clearErrorDisplay();
    clearReturnChange();

    var billAmount = Number(billAmtInputElement.value);
    var cashAmount = Number(cashAmtInputElement.value);
    
    if (isValid(billAmount, cashAmount)) {
        displayReturnChange(calculateReturnChange(billAmount, cashAmount));
    }
}

if (doesNotExist(billAmtInputElement) || doesNotExist(cashAmtInputElement) ||
    doesNotExist(submitButtonElement)) {
    alert("Page not set correctly.");
}

submitButtonElement.addEventListener("click", handleSubmit);