const ID_INPUT_INIT_PRICE = "init-price";
const ID_INPUT_QTY = "qty";
const ID_INPUT_CURR_PRICE = "curr-price";
const ID_BTN_SUBMIT = "btn-submit";
const ID_DISPLAY_MSG = "display-msg";

const STYLE_DISPLAY_BLOCK = "block";

const ERR_NO_INPUT = "Please enter all values";

var initPriceInputElement = document.getElementById(ID_INPUT_INIT_PRICE);
var currPriceInputElement = document.getElementById(ID_INPUT_CURR_PRICE);
var qtyInputElement = document.getElementById(ID_INPUT_QTY);
var submitBtnElement = document.getElementById(ID_BTN_SUBMIT);
var displayMsgElement = document.getElementById(ID_DISPLAY_MSG);


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


submitBtnElement.addEventListener("click", () => {    

    initPrice = initPriceInputElement.value;
    currPrice = currPriceInputElement.value;
    qty = qtyInputElement.value;    

    if (doesNotExist(initPrice) ||
        doesNotExist(currPrice) ||
        doesNotExist(qty)) {
            displayMessage(ERR_NO_INPUT);
            return;
    }

    var profit = (currPrice - initPrice) * qty;
    var profitPercentage = ((profit / initPrice) * 100).toFixed(2);

    var result = null;
    if (profit > 0) {
        result = `You have made a profit of ${profit} (${profitPercentage}%) 📈`;
    } else if (profit < 0) {
        result = `You have made a loss of ${Math.abs(profit)} (${Math.abs(profitPercentage)}%) 📉`;
    } else {
        result = "You've neither gained nor lost!"
    }

    displayMessage(result);
})