import { useState } from 'react';
import './App.css';

function App() {

    const [text, setText] = useState(null);

    function handleOnChange(event) {      
        setText(event.target.value);
    }

    return (
        <div>
            <header>Inside Outttt</header>
            <input onChange={handleOnChange} placeholder="Type something here" />
            <p>{text}</p>
        </div>
    );
}

export default App;