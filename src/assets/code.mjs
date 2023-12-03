// let currentList;
// const $comments = document.querySelector("#comments");
// const $commentList = document.querySelector("#commentList");

// $comments.addEventListener("click", (ev) => {
//     if (!ev.target.matches("button")) return;
//     const id = ev.target.closest("tr").dataset.id;
//     if (currentList == undefined) return;
//     fetch(`./comments/${currentList}/add/${id}`, {
//         method: 'post'
//     })
//     .then(r => r.json())
//     .then(showCurrentList);
// });

// $form.addEventListener("submit", handleNewList);
// fetch("/comments").then((b) => b.json()).then(showComments).catch((err) => showError("While getting /comments", err));
// updateLists();
// document.body.addEventListener("click", (ev) => {
//     if (!ev.target.matches("#commentList a")) return;
//     ev.preventDefault();
//     currentList = ev.target.dataset.id;
//     showCurrentList();
// });

// function showCurrentList() {
//     fetch(`/comments/${currentList}`).then((res) => {
//         if(!res.ok) showError("trying to get /comments/:id", err);
//         return res.json();
//     }).then(displayRecentComments)
//     .catch((err) => showError("trying to get /comments/:id", err));
// }

// function updateLists() {
//     fetch("/comments").then((b) => b.json()).then(showComments).catch((err) => showError("Getting /comments", err));
// }

// function displayRecentComments(json) {
//     const {
//         id, 
//         title, 
//         comments
//     } = json;
//     document.querySelector("#commentTitle").textContent = title;
//     const $tbody = document.querySelector("#selectedComment tbody");
//     $tbody.innerHTML =
//         comments.map(({ id, name, comment }) => `<tr data-id="${id}">
//         <td>${name}</td>
//         <td>$${price}</td>
//         </tr>`).join("\n");
// }