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

// Array of questions
var questions = [
    {
        question: "In which year did India gain freedom?",
        answer: "1947"
    },
    {
        question: "What is the capital of Tamil Nadu?",
        answer: "Chennai"
    }
]

// Iterate over all questions
for (var index = 0 ; index < questions.length ; index++) {
    play(questions[index].question, questions[index].answer);
}

// Display the result
console.log("Your score is " + score);