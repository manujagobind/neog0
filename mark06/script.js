BUTTON_SELECTOR = "#btn";
TEXT_SELECTOR = "#text";

var buttonElement = document.querySelector(BUTTON_SELECTOR);
var textAreaElement = document.querySelector(TEXT_SELECTOR);
var textAreaContent = null;

function handleButtonClick() {

    if (textAreaElement != null) {
        textAreaContent = textAreaElement.value;
    }

    var displayText = textAreaContent != null && textAreaContent != "" ? 
        "You have entered: " + textAreaContent : "You did not enter any text.";

    alert(displayText);
}

if (buttonElement != null) {
    buttonElement.addEventListener("click", handleButtonClick);
} else {
    console.log("No button found using selector " + BUTTON_SELECTOR);
}