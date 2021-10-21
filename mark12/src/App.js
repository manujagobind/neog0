import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import { appName, appPages } from './appConstants.js';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="body">
                    <Header title={appName} nav={appPages} />
                    <Switch>
                        {appPages.map((page, index) =>
                            <Route key={index} path={page.route} exact component={page.component} />
                        )}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );    
    }
}

export default App;