import './App.css';

var likeCounter = 0;
function handleLike() {
    likeCounter++;
    console.log("Liked", likeCounter);
}

function App() {
    return (
        <div>
            <header>Inside Outttt</header>
            <button onClick={handleLike}>Like</button>
        </div>
    );
}

export default App;