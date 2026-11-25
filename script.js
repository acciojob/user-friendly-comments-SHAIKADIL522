
const list = document.getElementById("comment-list");
const comments = Array.from(list.querySelectorAll(".comment"));


comments.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));


comments.forEach((c) => list.appendChild(c));