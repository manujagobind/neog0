import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNavIndex: this.getNavIndexFromPath(this.props.location.pathname)
        }
    }

    getNavIndexFromPath(path) {
        console.log(path)
        var navIndex = 0;
        for (var index = 0 ; index < this.props.nav.length ; index++) {            
            if (this.props.nav[index].route === path) {
                navIndex = index;
                break;
            }
        }
        return navIndex;
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

export default withRouter(Navbar);