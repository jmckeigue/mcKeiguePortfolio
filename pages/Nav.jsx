import React from 'react';

const Nav = () => {
    return (
        <nav>
            <h1>Jackson McKeigue</h1>
            <i className="burger-menu" id="burger-menu">
                <img  
                    src="/src/icons/hamburger-menu.png"
                    className="socicon hamburger-menu"
                    alt="hamburger-menu"
                    style={{ '--dark-mode-burger-menu': 'url("/src/icons/dark-mode-menu.png")' }}
                />
            </i>
            <ul className="navbar-list">
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#resume" className="nav-link">Resume</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="dropdown-menu">
                <ul className="navbar-list">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#resume" className="nav-link">Resume</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
