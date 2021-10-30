const btnElement = document.getElementById("btn");
const displayElement = document.getElementById("result");

function displayResult(message, error=false) {
    displayElement.innerText = message;    

    if (error) {
        displayElement.style.color = "red";
    } else {
        displayElement.style.color = "none";
    }
}

function dummyAPI() {
    return new Promise( (resolve, reject) => {

        displayResult('Contacting API...');
        setTimeout(() => {
            const error = false;

            if (!error) {
                resolve({status: 200, message: 'Success'});
            } else {
                reject({status: 401, message: 'Fail'});
            }
        }, 2000);                
    })
}

function handleClick() {

    dummyAPI()
        .then((response) => {
            displayResult(response.message);
        })
        .catch((response) => {
            if (response.status === 404) {
                displayResult("Page not found");
            } else if (response.status === 401) {
                displayResult("You're not logged in");
            } else {
                displayResult("Unknown error");
            }
        });
}


btnElement.addEventListener("click", handleClick)