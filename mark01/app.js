// Imports
var readLineSync = require('readline-sync');

// Global variables
var score = 0;

// Function definition
function play(question, answer) {
    var userAnswer = readLineSync.question(question);

    if (userAnswer === answer) {
        score = score + 1;
        console.log("You are right!");
    } else {
        score = score - 1;
        console.log("You are wrong!");
    }
}

// Calling the function
play("In which year did India gain freedom? ", "1947")
play("What is the capital of Tamil Nadu? ", "Chennai")

// Display
console.log("Your score is " + score);