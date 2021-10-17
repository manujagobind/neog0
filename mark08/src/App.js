import { useState } from 'react';
import './App.css';

var DEFAULT_TEXT = "Translation will appear here";
var ERR_TEXT = "We don't understand";

var emojiDict = {
    "🙂": "happy",
    "😊": "smiling",
    "🙁": "sad",
    "😇": "blessed",
    "😆": "funny"
}

function isBlank(text) {
    if (text === undefined) {
        return true;
    }
    if (text === null) {
        return true;
    }
    if (text.trim().length === 0) {
        return true;
    }
    return false;
}

function App() {

    const [text, setText] = useState(DEFAULT_TEXT);

    function handleOnChange(event) {

        var inputText = event.target.value;
        
        if (isBlank(inputText)) {
            setText(DEFAULT_TEXT);
            return;
        } 

        inputText = inputText.trim();

        if (inputText in emojiDict) {
            setText(emojiDict[inputText]);
        } else {
            setText(ERR_TEXT + " " + inputText);
        }
    }

    return (
        <div>
            <header>Inside Outttt</header>
            <input onChange={handleOnChange} placeholder="Enter emoji here" className="centered-obj"/>
            <p className="centered-obj">{text}</p>
        </div>
    );
}

export default App;