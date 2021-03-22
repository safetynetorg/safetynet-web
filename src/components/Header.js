import React, { Component } from 'react';
import './styles/header.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    // Handles click
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <nav className="nav-bar-items">
                <a href={"/"} style={{textDecoration : "none"}}><h1 className="navbar-logo">SAFETY NET</h1></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a className="nav-links" href='/#'>
                            How it works
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href='/#'>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href='/#'>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href='/#'>
                            Download
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;