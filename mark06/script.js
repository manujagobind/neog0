BUTTON_SELECTOR = "#btn";
TEXT_SELECTOR = "#text";
OUTPUT_DIV_SELECTOR = "#output";

ERR_NO_TEXT_AREA = "Input textarea not found";
ERR_NO_TEXT="You did not enter any text. Please try again.";

STYLE_MARGIN = "10px"

API_URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="

var buttonElement = document.querySelector(BUTTON_SELECTOR);
var textAreaElement = document.querySelector(TEXT_SELECTOR);
var outputDivElement = document.querySelector(OUTPUT_DIV_SELECTOR);


function updateTranslatedText(divElement, text) {
    if (divElement != null) {
        divElement.style.marginTop = STYLE_MARGIN;
        divElement.innerText = text;
    } else {
        alert("Translation result:" + text);
    }
}


function handleButtonClick() {

    var inputText = null;
    var translatedText = null;

    if (textAreaElement != null) {
        inputText = textAreaElement.value;
    } else {
        alert(ERR_NO_TEXT_AREA);
        return;
    }

    var isTextNullOrEmpty = inputText == null || inputText == "";

    if (isTextNullOrEmpty) {
        alert(ERR_NO_TEXT);
        return;
    }

    var url = encodeURI(API_URL + inputText);
    var url = API_URL + inputText;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            translatedText = response['contents']['translated'];
            updateTranslatedText(outputDivElement,   translatedText);
        })
        .catch(error => {
            console.log("An error occured: " + error);
        });
}

if (buttonElement != null) {
    buttonElement.addEventListener("click", handleButtonClick);
} else {
    console.log("No button found using selector " + BUTTON_SELECTOR);
}