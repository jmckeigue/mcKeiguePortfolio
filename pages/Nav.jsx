import React, { useState } from 'react';
import { useColorScheme } from '../hooks/useColorScheme';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useColorScheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const burgerIcon = theme === 'dark' ? "/src/icons/dark-mode-menu.png" : "/src/icons/hamburger-menu.png";

    return (
        <nav>
            <h1>Jackson McKeigue</h1>
            <button id="burger-menu" onClick={toggleMenu}>
                <i className="burger-menu" id="burger-menu">
                    <img  
                        src={burgerIcon}
                        className="socicon hamburger-menu"
                        alt="hamburger-menu"
                    />
                </i>
            </button>
            <ul className={`navbar-list ${isMenuOpen ? 'show' : '' } `}>
                <li onClick={closeMenu}><a href="#about" className="nav-link">About</a></li>
                <li onClick={closeMenu}><a href="#skills" className="nav-link">Skills</a></li>
                <li onClick={closeMenu}><a href="#resume" className="nav-link">Resume</a></li>
                <li onClick={closeMenu}><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
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
