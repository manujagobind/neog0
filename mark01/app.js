// Imports
var readLineSync = require('readline-sync');

// User input
var userName = readLineSync.question("What is your name? ");

// String concatenation
var welcomeMessage = "Hi, " + userName + "! Welcome to the CLI app!";

// Display
console.log(welcomeMessage);

