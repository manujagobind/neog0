import React from 'react';

import Navbar from './nav/nav.js';
import './header.css';

class Header extends React.Component {
    
    render() {
        return (
            <header className="header">
                <h1 className="brand">{this.props.title}</h1>
                <Navbar nav={this.props.nav} />
            </header>
        );
    }
}

export default Header;