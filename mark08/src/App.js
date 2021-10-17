import { useState } from 'react';
import './App.css';

function App() {

    const [likeCounter, setLikeCounter] = useState(0);

    function handleLike() {       
        var newLikeCounter = likeCounter + 1;        
        setLikeCounter(newLikeCounter);
    }

    return (
        <div>
            <header>Inside Outttt</header>
            <button onClick={handleLike}>Like</button>
            <p>{likeCounter}</p>
        </div>
    );
}

export default App;