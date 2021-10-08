BUTTON_SELECTOR = "#btn";
TEXT_SELECTOR = "#text";
OUTPUT_DIV_SELECTOR = "#output";

ERR_NO_TEXT_AREA = "Input textarea not found";
ERR_NO_TEXT="You did not enter any text. Please try again.";
STYLE_COLOR_ERR = "red";

API_URL = "https://api.funtranslations.com/translate/ferb-latin.json"

var buttonElement = document.querySelector(BUTTON_SELECTOR);
var textAreaElement = document.querySelector(TEXT_SELECTOR);
var outputDivElement = document.querySelector(OUTPUT_DIV_SELECTOR);


function updateTranslatedText(divElement, text) {
    if (divElement != null) {
        divElement.innerText = text;
    } else {
        alert("Translation result:" + text);
    }
}


function updateErrorMessage(divElement, msg) {
    if (divElement != null) {
        divElement.style.color = STYLE_COLOR_ERR;
        updateTranslatedText(divElement, msg)
    } else {
        alert("Error:" + text);
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

    var url = API_URL + "?text=" + inputText;
    fetch(url)
        .then(response => response.json())
        .then(response => {

            if ('error' in response) {
                updateErrorMessage(outputDivElement, response['error']['message']);
            } else {
                translatedText = response['contents']['translated'];
                updateTranslatedText(outputDivElement,   translatedText);
            }
            
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