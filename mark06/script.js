BUTTON_SELECTOR = "#btn";
TEXT_SELECTOR = "#text";
OUTPUT_DIV_SELECTOR = "#output";

STYLE_COLOR_SUCCESS = "green";
STYLE_COLOR_ERR = "red";
STYLE_MARGIN = "10px"

var buttonElement = document.querySelector(BUTTON_SELECTOR);
var textAreaElement = document.querySelector(TEXT_SELECTOR);
var outputDivElement = document.querySelector(OUTPUT_DIV_SELECTOR);

var textAreaContent = null;

function handleButtonClick() {

    if (textAreaElement != null) {
        textAreaContent = textAreaElement.value;
    }

    var isTextNullOrEmpty = textAreaContent == null || textAreaContent == "";

    var displayText = !isTextNullOrEmpty ? 
        "You have entered: " + textAreaContent : 
        "You did not enter any text. Please try again.";

    if (outputDivElement != null) {

        outputDivElement.style.marginTop = STYLE_MARGIN;
        if (isTextNullOrEmpty) {
            outputDivElement.style.color = STYLE_COLOR_ERR;
        } else {
            outputDivElement.style.color = STYLE_COLOR_SUCCESS;
        }

        outputDivElement.innerText = displayText;
    } else {
        alert(displayText);
    }
}

if (buttonElement != null) {
    buttonElement.addEventListener("click", handleButtonClick);
} else {
    console.log("No button found using selector " + BUTTON_SELECTOR);
}