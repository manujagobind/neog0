import React from 'react';

import Calculate from './Calculate.js';

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <h1>Sample Question 1</h1>                
                </header>
                <Calculate />
            </div>
        );
    }
}

export default App;