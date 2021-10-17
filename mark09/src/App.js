import { render } from 'react-dom';

import './App.css';

var appData = {
    "javascript": [
        {
            title: "Eloquent JavaScript",
            rating: 4
        },
        {
            title: "You Don't Know JS",
            rating: 3.5
        }
    ],
    "fiction": [
        {
            title: "Shiva Triology",
            rating: 5
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            rating: 5
        }
    ],
    "business": [
        {
            title: "Never Split the Difference",
            rating: 3.5
        },
        {
            title: "Loonsots",
            rating: 5
        }
    ]
};

function BookInfo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.rating}/5</p>
        </div>
    );
}

function BookList(props) {    
    return (
        props.books.map( (book) => {
            <BookInfo title={book.title} rating={book.rating} />
        })
    );
}

function App() {
    return (
        <div className="app-container">
            <header>📚 goodbooks</header>            
        </div>
    );
}

export default App;