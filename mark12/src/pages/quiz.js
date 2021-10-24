import React from 'react';

import './page.css';

const PARAM_QUESTION_PREFIX = "question_";

const questionsList = [
    {
        question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
        options: ["45°", "90°", "60°"],
        answer: "90°"
    },
    {
        question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
        options: ["obtuse", "acute", "right angled"],
        answer: "right angled"
    },
    {
        question: "A triangle can have ___ right angles",
        options: ["one", "two"],
        answer: "one"
    },
    {
        question: "Which of the following triangles are always similar?",
        options: ["equilateral triangle", "isoceles triangle"],
        answer: "equilateral triangle"
    },
    {
        question: "A scalene triangle has ___ lines of symmetry",
        options: ["2", "none", "15"],
        answer: "none"
    }
];

class QuizPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: questionsList.slice().fill(null),
            result: null
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTotalScore() {
        var score = 0;
        questionsList.map( (question, questionIndex) =>
            score += this.state.answers[questionIndex] === question.answer ? 1 : 0
        );
        return score;
    }

    handleInput(event) {        
        var questionIndex = parseInt(event.target.name.substr(PARAM_QUESTION_PREFIX.length));
        var answers = this.state.answers.slice();        
        answers[questionIndex] = event.target.value;
        this.setState({answers: answers});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({result: parseInt(this.getTotalScore())})
    }

    render() {
        return (
            <main>
                <h1 className="page-title">Triangles Quiz</h1>
                <p className="display-msg">For each correct answer you'll get 1 point.</p>
                <form onSubmit={this.handleSubmit}>
                    {questionsList.map( (question, questionIndex) => 
                        <div key={questionIndex} className="input-group">
                            <label>{question.question}</label>
                            <div className="flex-row">
                            {question.options.map( (option, optionIndex) =>
                                <div key={optionIndex} className="input-group input-group-radio">
                                    <input                                       
                                        type="radio"
                                        id={PARAM_QUESTION_PREFIX + questionIndex}
                                        name={PARAM_QUESTION_PREFIX + questionIndex}
                                        value={option}
                                        onChange={this.handleInput}/>
                                    <label>{option}</label>
                                </div>
                            )}
                            </div>
                        </div>                        
                    )}
                <button className="form-submit" type="submit" onSubmit={this.handleSubmit}>Submit</button>
                </form>
                <p className="display-msg">{this.state.result}</p>
            </main>
        );
    }
}

export default QuizPage;