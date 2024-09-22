import React, { useEffect, useState } from 'react';
import { useColorScheme } from "../hooks/useColorScheme";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const theme = useColorScheme();

    // Show button when page is scrolled down to a given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up the event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const arrowIcon = theme === 'dark' ? "/src/icons/dark-mode-arrow.jpg" : "/src/icons/uparrow.png"

    // Scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible ? (
            <button onClick={scrollToTop} className="scroll-up">
                <img 
                    src={arrowIcon}
                    alt="Go to top" 
                    className="up-arrow"
                />
            </button>
        ) : null
    );
};

export default ScrollToTopButton;
