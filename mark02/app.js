var readlineSync = require('readline-sync');

var gameData = [
    {
        title: "India Quiz",
        questions: [
            {
                question: "What is the capital of Tamil Nadu?",
                answer: "Chennai"
            },
            {
                question: "Which state's capital is Mumbai?",
                answer: "Maharashtra"
            },
            {
                question: "Is Chandigarh a state?",
                answer: "No"
            },
            {
                question: "In which state is Mount Kanchenjunga located in?",
                answer: "Sikkim"
            },
            {
                question: "In which town is the Pambam bridge located?",
                answer: "Rameshwaram"
            }
        ],
    },
    {
        title: "World Quiz",
        questions: [
            {
                question: "What is the deepest point known on Earth?",
                answer: "Marina Trench"
            }
        ]
    }
];


var PASS = true;
var FAIL = false;
var MAX_LEVELS = gameData.length;
var MAX_RETRY = 3;
var SIXTY_PERCENT = 0.6;
var GAME_OVER = false;


function levelSetup(level) {

    if (level < 1 || level > MAX_LEVELS) {
        console.log("This is an invalid level! Ending game.");
        return null;
    }

    var levelIndex = level - 1;    
    levelData = gameData[levelIndex];

    console.log(`This level is called ${levelData.title}`);

    return levelData.questions;
}


function getMaxPossibleScore(level) {

    if (level < 1 || level > MAX_LEVELS) {
        console.log("This is an invalid level! Ending game.");
        return Infinity;
    }

    var levelIndex = level - 1;    
    levelData = gameData[levelIndex];

    return levelData.questions.length;
}


function playRound(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log("You are right!");
        return PASS;
    }
    
    return FAIL;
}


function playLevel(level) {
    console.log(`Playing level ${level}`);

    questions = levelSetup(level);
    var count_consecutive_fail = 0;
    var score = 0;

    if (questions === null) {
        GAME_OVER = true;
        return score;
    }

    console.log(`This level has ${questions.length} rounds.`);    
    
    for (var index = 0 ; index < questions.length ; index++) {


        if (count_consecutive_fail === MAX_RETRY) {
            console.log(`You entered ${MAX_RETRY} consecutive incorrect answers. Game over.`);
            GAME_OVER = true;
            return score;
        }
        
        if(playRound(questions[index].question, questions[index].answer) === PASS) {
            score++;
            count_consecutive_fail = 0;
        } else {
            count_consecutive_fail++;
        }
    }

    return score;
}


function startGame() {
    var levelScore = 0;
    var totalScore = 0;

    for (var level = 1 ; level <= gameData.length; level++) {        
        levelScore += playLevel(level);
        totalScore += levelScore;

        if (GAME_OVER) {
            break;
        }

        console.log(`Your total score after level ${level} is ${totalScore}`);

        if (levelScore < SIXTY_PERCENT * getMaxPossibleScore(level)) {
            console.log("Sorry you have a low score. You cannot proceed to the next level.");
            break;
        }
    }

    console.log(`Final score: ${totalScore}`);
}


startGame();