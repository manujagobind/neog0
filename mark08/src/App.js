import './App.css';

var username = "Gobind";
var textColor = "blue";

function App() {
    return (
        <div>
            <header>Inside Outttt</header>
            <h1 style={{color: textColor}}>Welcome {username}</h1>
        </div>
    );
}

export default App;