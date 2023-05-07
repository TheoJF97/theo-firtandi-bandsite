//declaring array of our shows
let showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge ",
    location: "San Francisco, CA ",
  },
  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency ",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA ",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club ",
    location: "San Francisco, CA ",
  },
];
//grab the parent section element
const showsSection = document.querySelector(".shows");

for (let i = 0; i < showsArray.length; i++) {
  // Create a new div for each show
  const showsBox = document.createElement("div");
  showsBox.classList.add("shows-box");

  // Create the date header and paragraph
  const dateHeader = document.createElement("h3");
  dateHeader.classList.add("shows__date-header");
  dateHeader.textContent = "DATE";
  const dateParagraph = document.createElement("p");
  dateParagraph.classList.add("shows__date");
  dateParagraph.textContent = showsArray[i].date;

  // Create the venue header and paragraph
  const venueHeader = document.createElement("h3");
  venueHeader.classList.add("shows__venue-header");
  venueHeader.textContent = "VENUE";
  const venueParagraph = document.createElement("p");
  venueParagraph.classList.add("shows__venue");
  venueParagraph.textContent = showsArray[i].venue;

  // Create the location header and paragraph
  const locationHeader = document.createElement("h3");
  locationHeader.classList.add("shows__location-header");
  locationHeader.textContent = "LOCATION";
  const locationParagraph = document.createElement("p");
  locationParagraph.classList.add("shows__location");
  locationParagraph.textContent = showsArray[i].location;

  // Create the buy tickets button
  const buyButton = document.createElement("button");
  buyButton.classList.add("shows__buy");
  buyButton.setAttribute("type", "submit");
  buyButton.textContent = "BUY TICKETS";

  // Append all the elements to the show div
  showsBox.appendChild(dateHeader);
  showsBox.appendChild(dateParagraph);
  showsBox.appendChild(venueHeader);
  showsBox.appendChild(venueParagraph);
  showsBox.appendChild(locationHeader);
  showsBox.appendChild(locationParagraph);
  showsBox.appendChild(buyButton);

  // Append the show div to the shows section
  showsSection.appendChild(showsBox);

  // Add a divider line after each show
  if (i < showsArray.length - 1) {
    const dividerLine = document.createElement("div");
    dividerLine.classList.add("divider-line");
    showsSection.appendChild(dividerLine);
  }
}

//Create a function to hide field headers when viewport changes to tablet and above
//grab the headers to be hidden
const headers = showsSection.querySelectorAll(
  ".shows__date-header, .shows__venue-header, .shows__location-header"
);
//Create the function to handle the viewport change
function handleViewportChange() {
  if (window.innerWidth > 767) {
    headers.forEach((header) => header.classList.add("display--none"));
  } else {
    headers.forEach((header) => header.classList.remove("display--none"));
  }
}

//Add in the event listner upon resizing, then invoke the function
window.addEventListener("resize", handleViewportChange);
handleViewportChange();

const showsBoxEls = document.querySelectorAll(".shows-box");

// Create an event listener where upon click, the selected box styling is applied 
showsBoxEls.forEach((showsBoxEl) => {
  showsBoxEl.addEventListener("click", () => {
    document.querySelector(".box-selected")?.classList.remove("box-selected");
    showsBoxEl.classList.add("box-selected");
  });
});