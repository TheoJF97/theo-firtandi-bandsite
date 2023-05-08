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

//To Generate the section shows and h1 while still keeping showsSection in global scope
const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");

const showsSection = document.createElement("section");
showsSection.classList.add("shows");
hero.insertAdjacentElement("afterend", showsSection);

const showsTitle = document.createElement("h1");
showsTitle.classList.add("shows__title");
showsTitle.textContent = "Shows";
showsSection.appendChild(showsTitle);

//Create function to load the default shows
function loadDefaultShows(shows) {




  
  for (let i = 0; i < shows.length; i++) {
    //Create a box for each show
    const showsBox = document.createElement("div");
    showsBox.classList.add("shows-box");

    //Create the date header and paragraph
    const dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__date-header");
    dateHeader.textContent = "DATE";
    const dateParagraph = document.createElement("p");
    dateParagraph.classList.add("shows__date");
    dateParagraph.textContent = shows[i].date;

    //Create the venue header and paragraph
    const venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__venue-header");
    venueHeader.textContent = "VENUE";
    const venueParagraph = document.createElement("p");
    venueParagraph.classList.add("shows__venue");
    venueParagraph.textContent = shows[i].venue;

    //Create the location header and paragraph
    const locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__location-header");
    locationHeader.textContent = "LOCATION";
    const locationParagraph = document.createElement("p");
    locationParagraph.classList.add("shows__location");
    locationParagraph.textContent = shows[i].location;

    //Create the buy tickets button
    const buyButton = document.createElement("button");
    buyButton.classList.add("shows__buy");
    buyButton.textContent = "BUY TICKETS";

    //Append all the elements to the shows box
    showsBox.appendChild(dateHeader);
    showsBox.appendChild(dateParagraph);
    showsBox.appendChild(venueHeader);
    showsBox.appendChild(venueParagraph);
    showsBox.appendChild(locationHeader);
    showsBox.appendChild(locationParagraph);
    showsBox.appendChild(buyButton);

    // Append the each shows box to the shows section
    showsSection.appendChild(showsBox);

    // Add a divider line after each show
    if (i < showsArray.length) {
      const dividerLine = document.createElement("div");
      dividerLine.classList.add("divider-line");
      showsSection.appendChild(dividerLine);
    }
  }
}

//invoke function
loadDefaultShows(showsArray);

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
