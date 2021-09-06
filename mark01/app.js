// Imports
var readLineSync = require('readline-sync');

// Variables
var score = 0;

// User input
var userAns = readLineSync.question("Are you older than 25? ");


console.log("You entered " + userAns)

// App logic
if (userAns === "yes") {
    score = score + 1;
    console.log("You are right!");
} else {
    score = score - 1;
    console.log("You are wrong");
}

console.log("You score is " + score);