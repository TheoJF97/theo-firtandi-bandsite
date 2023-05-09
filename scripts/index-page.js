// let commentArray = [
//   {
//     name: "Connor Walton",
//     date: "02/17/2021",
//     message:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     date: "01/09/2021",
//     message:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     message:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];
const url = `https://project-1-api.herokuapp.com/comments/?api_key=4f57abf7-56cd-439f-8f4b-a987331be0b4`;

axios
  .get(url)
  .then((result) => {
    let commentsArray = result.data;
    console.log(commentsArray);

    //Function to load the default comments passing an Array of comments
    function loadDefaultComments(comments) {
      const commentsAll = document.querySelector(".comments-all");

      // Add divider line before first comment
      const dividerLineStart = document.createElement("div");
      dividerLineStart.classList.add("divider-line");
      commentsAll.appendChild(dividerLineStart);

      for (comment of comments) {
        const dividerLine = document.createElement("div");
        dividerLine.classList.add("divider-line");

        const commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");

        const commentAvatar = document.createElement("div");
        commentAvatar.classList.add("comment-avatar");

        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");

        const commentHeader = document.createElement("div");
        commentHeader.classList.add("comment-header");

        const commentName = document.createElement("p");
        commentName.classList.add("comment-name");
        commentName.innerText = comment.name;

        const commentDate = document.createElement("span");
        commentDate.classList.add("comment-date");
        commentDate.innerText = new Date(
          comment.timestamp
        ).toLocaleDateString();

        const commentMsg = document.createElement("p");
        commentMsg.classList.add("comment-msg");
        commentMsg.innerText = comment.comment;

        // Append all the elements to the corresponding Divs
        commentsAll.appendChild(commentBox);
        commentBox.appendChild(commentAvatar);
        commentBox.appendChild(commentContent);
        commentContent.appendChild(commentHeader);
        commentHeader.appendChild(commentName);
        commentHeader.appendChild(commentDate);
        commentContent.appendChild(commentMsg);

        // Add divider line after comment
        commentsAll.appendChild(dividerLine);
      }
    }
    //invoke the function
    loadDefaultComments(commentsArray);
  })
  .catch((error) => {
    console.log(error);
  });

//AXIOS post test

//Grab form and input elements to global scale
const formEl = document.querySelector(".comment-form");
const nameInput = document.querySelector(".input__name");
const commentInput = document.querySelector(".input__comment");

//Listen for submit event via button and store values in object
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const date = new Date().toLocaleDateString();
  const userComment = event.target.userComment.value;

  if (!name || !userComment) {
    nameInput.classList.add("input--error");
    commentInput.classList.add("input--error");
  } else {
    nameInput.classList.remove("input--error");
    commentInput.classList.remove("input--error");
    // const newComment = displayComment(name, date, userComment);

    axios
      .post(url, {
        name: name,
        comment: userComment,
      })
      .then((response) => {
        const newComment = response.data;
        displayComment(
          newComment.name,
          new Date(newComment.timestamp).toLocaleDateString(),
          newComment.comment
        );
      })
      .catch((error) => {
        console.error(error);
      });

    formEl.reset();
  }
});

const commentsAll = document.querySelector(".comments-all");

//create a function to add the user inputted comment
function displayComment(name, date, text) {
  //Create a box for each comment
  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");

  //Create the avatar div
  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment-avatar");

  //Create a box for the comment content
  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  //Create the comment header
  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");

  //Create the name of the user
  const commentName = document.createElement("p");
  commentName.classList.add("comment-name");
  commentName.innerText = name;

  //Create the date of the comment
  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  commentDate.innerText = date;

  //Create the message of the comment
  const commentMsg = document.createElement("p");
  commentMsg.classList.add("comment-msg");
  commentMsg.innerText = text;

  //Create the divider line
  const dividerLine = document.createElement("div");
  dividerLine.classList.add("divider-line");

  //Append/Prepend all elements to their corresponding parent
  commentsAll.prepend(commentBox);
  commentBox.appendChild(commentAvatar);
  commentBox.appendChild(commentContent);
  commentContent.appendChild(commentHeader);
  commentHeader.appendChild(commentName);
  commentHeader.appendChild(commentDate);
  commentContent.appendChild(commentMsg);
  commentsAll.prepend(dividerLine);
}

//Function to load the default comments passing an Array of comments
function loadDefaultComments(comments) {
  const commentsAll = document.querySelector(".comments-all");

  // Add divider line before first comment
  const dividerLineStart = document.createElement("div");
  dividerLineStart.classList.add("divider-line");
  commentsAll.appendChild(dividerLineStart);

  for (comment of comments) {
    const dividerLine = document.createElement("div");
    dividerLine.classList.add("divider-line");

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    const commentAvatar = document.createElement("div");
    commentAvatar.classList.add("comment-avatar");

    const commentContent = document.createElement("div");
    commentContent.classList.add("comment-content");

    const commentHeader = document.createElement("div");
    commentHeader.classList.add("comment-header");

    const commentName = document.createElement("p");
    commentName.classList.add("comment-name");
    commentName.innerText = comment.name;

    const commentDate = document.createElement("span");
    commentDate.classList.add("comment-date");
    commentDate.innerText = comment.date;

    const commentMsg = document.createElement("p");
    commentMsg.classList.add("comment-msg");
    commentMsg.innerText = comment.message;

    // Append all the elements to the corresponding Divs
    commentsAll.appendChild(commentBox);
    commentBox.appendChild(commentAvatar);
    commentBox.appendChild(commentContent);
    commentContent.appendChild(commentHeader);
    commentHeader.appendChild(commentName);
    commentHeader.appendChild(commentDate);
    commentContent.appendChild(commentMsg);

    // Add divider line after comment
    commentsAll.appendChild(dividerLine);
  }
}

// To create a function that removes the alt text of avatar upon error
const avatarEls = document.querySelectorAll(".comment-avatar");

avatarEls.forEach((avatarEl) => {
  avatarEl.addEventListener("error", () => {
    avatarEl.style.backgroundImage = "none";
    avatarEl.style.backgroundColor = "#e1e1e1";
    avatarEl.alt = "";
    avatarEl.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAIAAOeAuvpTAAAAABJRU5ErkJggg==";
  });
});
