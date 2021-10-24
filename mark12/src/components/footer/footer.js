import React from 'react';

import './footer.css';

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <p>© | 2021 | Gobind Manuja</p>
                <ul>
                    <li className="li-inline">
                        <a href="https://github.com/manujagobind">Github</a>
                    </li>
                    <li className="li-inline">
                        <a href="https://twitter.com/manujagobind">Twitter</a>
                    </li>
                    <li className="li-inline">
                        <a href="https://linkedin.com/in/manujagobind">LinkedIn</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;