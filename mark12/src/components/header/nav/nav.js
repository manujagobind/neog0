import React from 'react';

import './nav.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNavIndex: 0
        }
    }

    toggleNav(navIndex) {
        this.setState({activeNavIndex: navIndex});
    }

    render() {
        return (
            <nav className="nav">
                <ul>
                    {this.props.nav.map( (navItem, index) =>
                        <li key={index}
                            onClick={() => this.toggleNav(index)}
                            className={"nav-item " + (index === this.state.activeNavIndex ? "nav-item-active" : "")}>
                            {navItem.title}
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Navbar;