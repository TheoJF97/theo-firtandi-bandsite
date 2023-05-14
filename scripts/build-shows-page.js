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

/*
To generate the shows title and section in the global scope for further use 
*/
//Select hero and footer, place shows section in between the two
const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");

const showsSection = document.createElement("section");
showsSection.classList.add("shows");
hero.insertAdjacentElement("afterend", showsSection);

//Create the h1 Element, add shows title class, fill in text, append
const showsTitle = document.createElement("h1");
showsTitle.classList.add("shows__title");
showsTitle.textContent = "Shows";
showsSection.appendChild(showsTitle);

//Create div element
const showsAll = document.createElement("div");
//Add class shows-all
showsAll.classList.add("shows-all");
//showsSection.appendChild(showsAll)
showsSection.appendChild(showsAll);

/*
Create an event listener where upon click, 
the selected box styling is applied
*/
//Create function to load the default shows
function loadDefaultShows(shows) {
  //Create a box for the column titles
  const showsBox = document.createElement("div");
  showsBox.classList.add("shows-box");
  // Append this showsBox to showsAll
  showsAll.appendChild(showsBox);

  //Create the date header
  const dateHeader = document.createElement("h3");
  dateHeader.classList.add("shows__date-tablet");
  dateHeader.textContent = "DATE";
  //Create the venue header
  const venueHeader = document.createElement("h3");
  venueHeader.classList.add("shows__venue-tablet");
  venueHeader.textContent = "VENUE";
  //Create the location header
  const locationHeader = document.createElement("h3");
  locationHeader.classList.add("shows__location-tablet");
  locationHeader.textContent = "LOCATION";
  //Create the buy tickets button to be made invisible
  const buyButton = document.createElement("button");
  buyButton.classList.add("shows__buy");
  buyButton.textContent = "BUY TICKETS";
  buyButton.classList.add("shows__buy--none");

  //append
  showsBox.appendChild(dateHeader);
  showsBox.appendChild(venueHeader);
  showsBox.appendChild(locationHeader);
  showsBox.appendChild(buyButton);

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

    // Append each shows box to the shows section
    showsAll.appendChild(showsBox);

    // Add a divider line after each show
    if (i < showsArray.length) {
      const dividerLine = document.createElement("div");
      dividerLine.classList.add("divider-line");
      showsAll.appendChild(dividerLine);
    }
  }
}

//invoke function
loadDefaultShows(showsArray);

/*
Create an event listener where upon click, 
the selected box styling is applied
*/
//Call all shows-box elements
const showsBoxEls = document.querySelectorAll(".shows-box");

// Create the event listener to add class when selected and remove
showsBoxEls.forEach((showsBoxEl) => {
  showsBoxEl.addEventListener("click", () => {
    document.querySelector(".shows--selected")?.classList.remove("shows--selected");
    showsBoxEl.classList.add("shows--selected");
  });
});
