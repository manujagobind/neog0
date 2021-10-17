import { useState } from 'react';

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
        <div class="book-info">
            <h2>{props.title}</h2>
            <p>{props.rating}/5</p>
        </div>
    );
}

function BookList(props) {    
    return (
        props.books.map( (book) =>
            <BookInfo title={book.title} rating={book.rating} />
        )
    );
}

function App() {

    const [currentCategory, setCurrentCategory] = useState(Object.keys(appData)[0]);

    function toggleBookList(category) {
        setCurrentCategory(category);
    }

    return (
        <div className="app-container">
            <header>📚 goodbooks</header>
            {Object.keys(appData).map( (category) => 
                <button key={category} onClick={ () => toggleBookList(category) }>{category}</button>
            )}
            <hr />
            <BookList books={appData[currentCategory]} />
        </div>
    );
}

export default App;