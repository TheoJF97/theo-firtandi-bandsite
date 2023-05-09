/*
GLOBAL SCOPED VARIABLES
*/
//Grab form and input elements to global scale
const formEl = document.querySelector(".comment-form");
const commentsAll = document.querySelector(".comments-all");
const nameInput = document.querySelector(".input__name");
const commentInput = document.querySelector(".input__comment");

//Declare my URL with API Key
const url = `https://project-1-api.herokuapp.com/comments/?api_key=4f57abf7-56cd-439f-8f4b-a987331be0b4`;

/*
DISPLAY THE COMMENTS
*/
//function displayComment() takes in one comment object as a parameter and displays it on the page using JS DOM
function displayComment(comment) {
  console.log(comment);
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
  console.log(comment.name);

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  commentDate.innerText = new Date(comment.timestamp).toLocaleDateString();

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

  // Add divider line after a comment
  commentsAll.appendChild(dividerLine);
}

/*
Use AXIOS to GET my API and load all comments 
*/
function loadAllComments() {
  axios
    .get(url)
    .then((result) => {
      let comments = result.data;
      console.log(comments);

      // Sort comments by date
      comments.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      // Clear all the comments
      commentsAll.innerHTML = "";

      for (comment of comments) {
        displayComment(comment);
      }
    })
    //Catch error if all hell breaks loose
    .catch((error) => {
      console.log(error);
    });
}

loadAllComments();

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

    //Use Axios to post the user's comment, and re-load all the comments
    axios
      .post(url, {
        name: name,
        comment: userComment,
      })

      .then((response) => {
        //clear the form
        event.target.reset();

        //Update the comments from API
        loadAllComments();
      })

      .catch((error) => {
        console.error(error);
      });
    formEl.reset();
  }
});

// Create a function that removes the alt text of avatar upon error
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
