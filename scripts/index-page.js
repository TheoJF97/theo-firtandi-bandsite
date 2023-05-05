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

//Create a function to addComment
//addEventListener for button COMMENT

function addComment() {}

//Create a function to renderComment
function renderComments() {
  const commentSection = document.querySelector(".comment");

  const dividerLine = document.createElement("div");
  dividerLine.classList.add("divider-line");
  commentSection.appendChild(dividerLine);

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  commentSection.appendChild(commentBox);

  const commentPfp = document.createElement("div");
  commentPfp.classList.add("comment-pfp");
  commentBox.appendChild(commentPfp);

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");
  commentBox.appendChild(commentContent);

  const commentContentHeader = document.createElement("div");
  commentContentHeader.classList.add("comment-content-header");
  commentContent.appendChild(commentContentHeader);

  const commentName = document.createElement("p");
  commentName.classList.add("comment-name");
  commentContentHeader.appendChild(commentName);

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  commentContentHeader.appendChild(commentDate);

  const commentMsg = document.createElement("p");
  commentMsg.classList.add("comment-msg");
  commentContent.appendChild(commentMsg);
}

