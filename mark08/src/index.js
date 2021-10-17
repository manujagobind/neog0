import React  from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
    return (
        <div>
            <header>Inside Outttt</header>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);