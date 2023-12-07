var checkElem = false;

function showComments() {
    if (!checkElem) {
        var showCommentsButton = document.getElementById('showCommentsButton');
        if (showCommentsButton) {
            showCommentsButton.style.display = 'none';
        }

        var commentsContainer = document.getElementById('commentsContainer');
        if (!commentsContainer) {
            commentsContainer = document.createElement('div');
            commentsContainer.id = 'commentsContainer';

            var commentSection = document.getElementById('comments');
            if (commentSection) {
                commentSection.appendChild(commentsContainer);
            }
        }

        commentsContainer.style.visibility = 'visible';
        commentsContainer.innerHTML = '<h2>Comments!</h2>';
        displayComments(commentsContainer);

        checkElem = true;
    }
}

function displayComments(container) {
    fetch('/api/comments')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch comments. Status: ${response.status}`);
            }
            return response.json();
        })
        .then((comments) => {
            if (comments.length === 0) {
                container.innerHTML = 'No Comments.';
                return;
            }

            comments.forEach(function (comment) {
                var commentDiv = document.createElement('div');
                commentDiv.innerHTML = `<h2>${comment.name}</h2><br>
                                        <p>${comment.description}</p><br>`;
                container.appendChild(commentDiv);
            });
        })
        .catch((error) => console.error('Error fetching comments:', error));
}

window.onload = function () {
    console.log('Window onload event occurred.');
    var showCommentsButton = document.getElementById('showCommentsButton');
    if (showCommentsButton) {
        showCommentsButton.addEventListener('click', showComments);
    }
};

if (typeof window !== 'undefined') {

    // Scroll to top
    const scrollUp = document.querySelector("#scroll-up");
  
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    });
  
    // Nav hamburger
    const burger = document.querySelector("#burger-menu");
    const ul = document.querySelector(".navbar-list");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    burger.addEventListener("click", () => {
        ul.classList.toggle("show");
        dropdownMenu.classList.toggle("show");

        const icon = document.querySelector(".burger-menu");
        icon.classList.toggle("icon-shift");
    });

    // Close hamburger
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((link) => {
        link.addEventListener("click", () => {
            ul.classList.remove("show");
            dropdownMenu.classList.remove("show");

            const icon = document.querySelector(".burger-menu");
            icon.classList.remove("icon-shift");
        });
    });
}