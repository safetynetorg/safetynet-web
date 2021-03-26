/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { scroller } from 'react-scroll'
import './styles/header.scss'
import logo from '../assets/logo.svg'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    scrollTo = (element) => {
        scroller.scrollTo(`${element}`, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }

    // Handles click
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <nav className="nav-bar-items">
                <a href={"/"} style={{textDecoration : "none"}}><img className={'navbar-logo'} src={logo} alt='logo'/></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a className="nav-links" onClick={()=> this.scrollTo('how-it-works')}>
                            How it works
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" onClick={()=> this.scrollTo('about-us')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" href='/#' onClick={()=> this.scrollTo('download')}>
                            Download
                        </a>
                    </li>
                    <li>
                        <a className="nav-links" onClick={()=> this.scrollTo('questions')}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;