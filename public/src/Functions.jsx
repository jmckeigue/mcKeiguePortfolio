import React from "react";
import { useEffect } from "react";

export const WindowLoad = () => {
    useEffect(() => {
        console.log('Window onload event occurred.');

        const timeoutId = setTimeout(() => {
            alert("You've been on this page for so long, thank you!");
        }, 3000);

        const handleShowComments = () => {
            // Assuming `showComments` is defined elsewhere and is not reliant on direct DOM manipulation
            showComments();
        };

        const showCommentsButton = document.getElementById('showCommentsButton');
        if (showCommentsButton) {
            showCommentsButton.addEventListener('click', handleShowComments);
        }

        // Cleanup
        return () => {
            clearTimeout(timeoutId);
            if (showCommentsButton) {
                showCommentsButton.removeEventListener('click', handleShowComments);
            }
        };
    }, []);

    return null; // This component does not render anything
};

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <button id="burger-menu" onClick={toggleMenu}>
                <i className="burger-menu" id="burger-menu">
                    <img  
                        src="/src/icons/hamburger-menu.png"
                        className="socicon hamburger-menu"
                        alt="hamburger-menu"
                        style={{ '--dark-mode-burger-menu': 'url("/src/icons/dark-mode-menu.png")' }}
                    />
                </i>
                <ul className={`navbar-list ${ menuOpen ? 'show' : '' }`}>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#resume" className="nav-link">Resume</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className={`dropdown-menu ${ menuOpen ? 'show' : '' }`}>
                    <ul className="navbar-list">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#resume" className="nav-link">Resume</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </button>
        </nav>
    )
}

// function displayComments(container) {
//     fetch('/api/comments')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch comments. Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((comments) => {
//             if (comments.length === 0) {
//                 container.innerHTML = 'No Comments.';
//                 return;
//             }

//             comments.forEach(function (comment) {
//                 var commentDiv = document.createElement('div');
//                 commentDiv.innerHTML = `<h2>${comment.name}</h2><br>
//                                         <p>${comment.description}</p><br>`;
//                 container.appendChild(commentDiv);
//             });
//         })
//         .catch((error) => console.error('Error fetching comments:', error));
// }