let commentArray = [
  {
    name: "Connor Walton",
    date: "2/17/2021",
    message:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    message:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    message:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

//Grab form element
const formEl = document.querySelector(".comment-form");

//Listen for submit event via button and store values in object
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const date = new Date().toLocaleDateString();
  const userComment = event.target.userComment.value;

  let newComment = {
    name: name,
    date: date,
    text: userComment,
  };

  addComment(newComment.name, newComment.date, newComment.text);
});

const largeBox = document.querySelector(".largebox");

//create a function to add the user inputted comment
function addComment(name, date, text) {
  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  largeBox.prepend(commentBox);

  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment-avatar");
  commentBox.prepend(commentAvatar);

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");
  commentBox.prepend(commentContent);

  const commentContentHeader = document.createElement("div");
  commentContentHeader.classList.add("comment-header");
  commentContent.prepend(commentContentHeader);

  const commentName = document.createElement("p");
  commentName.classList.add("comment-name");
  commentName.innerText = name;
  commentContentHeader.prepend(commentName);

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  commentDate.innerText = date;
  commentContentHeader.prepend(commentDate);

  const commentMsg = document.createElement("p");
  commentMsg.classList.add("comment-msg");
  commentMsg.innerText = text;
  commentContent.prepend(commentMsg);

  const dividerLine = document.createElement("div");
  dividerLine.classList.add("divider-line");
  largeBox.prepend(dividerLine);
}

//load default comment - function
function loadDefaultComments(comments) {
  for (comment of comments) {
    const dividerLine = document.createElement("div");
    dividerLine.classList.add("divider-line");
    largeBox.appendChild(dividerLine);

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    largeBox.appendChild(commentBox);

    const commentAvatar = document.createElement("div");
    commentAvatar.classList.add("comment-avatar");
    commentBox.appendChild(commentAvatar);

    const commentContent = document.createElement("div");
    commentContent.classList.add("comment-content");
    commentBox.appendChild(commentContent);

    const commentContentHeader = document.createElement("div");
    commentContentHeader.classList.add("comment-header");
    commentContent.appendChild(commentContentHeader);

    const commentName = document.createElement("p");
    commentName.classList.add("comment-name");
    commentName.innerText = comment.name;
    commentContentHeader.appendChild(commentName);

    const commentDate = document.createElement("span");
    commentDate.classList.add("comment-date");
    commentDate.innerText = comment.date;
    commentContentHeader.appendChild(commentDate);

    const commentMsg = document.createElement("p");
    commentMsg.classList.add("comment-msg");
    commentMsg.innerText = comment.message;
    commentContent.appendChild(commentMsg);
  }
}

loadDefaultComments(commentArray);

//Create a function to renderComment
// function renderComments() {
//   const largeBox = document.querySelector(".comment");

//   const dividerLine = document.createElement("div");
//   dividerLine.classList.add("divider-line");
//   largeBox.appendChild(dividerLine);

//   const commentBox = document.createElement("div");
//   commentBox.classList.add("comment-box");
//   largeBox.appendChild(commentBox);

//   const commentAvatar = document.createElement("div");
//   commentAvatar.classList.add("comment-Avatar");
//   commentBox.appendChild(commentAvatar);

//   const commentContent = document.createElement("div");
//   commentContent.classList.add("comment-content");
//   commentBox.appendChild(commentContent);

//   const commentContentHeader = document.createElement("div");
//   commentContentHeader.classList.add("comment-content-header");
//   commentContent.appendChild(commentContentHeader);

//   const commentName = document.createElement("p");
//   commentName.classList.add("comment-name");
//   commentContentHeader.appendChild(commentName);

//   const commentDate = document.createElement("span");
//   commentDate.classList.add("comment-date");
//   commentContentHeader.appendChild(commentDate);

//   const commentMsg = document.createElement("p");
//   commentMsg.classList.add("comment-msg");
//   commentContent.appendChild(commentMsg);
// }
