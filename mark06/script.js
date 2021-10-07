BUTTON_SELECTOR = "#btn";

var buttonElement = document.querySelector(BUTTON_SELECTOR);

function handleButtonClick() {
    alert("Button was clicked!");
}

if (buttonElement != null) {
    buttonElement.addEventListener("click", handleButtonClick);
} else {
    console.log("No button found using selector " + BUTTON_SELECTOR);
}