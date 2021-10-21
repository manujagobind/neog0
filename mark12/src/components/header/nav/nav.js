import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link key={index} to={navItem.route}>
                            <li
                                onClick={() => this.toggleNav(index)}
                                className={"nav-item " + (index === this.state.activeNavIndex ? "nav-item-active" : "")}>
                                {navItem.title}
                            </li>
                        </Link>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Navbar;