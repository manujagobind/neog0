import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import { appName, navData } from './appData.js';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="body">
                <Header title={appName} nav={navData} />
                <Footer />
            </div>
        );    
    }
}

export default App;