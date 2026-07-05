const form = document.querySelector("#eventForm");
const attendantType = document.querySelector("#attendantType");
const idContainer = document.querySelector("#idContainer");
const identification = document.querySelector("#ID");
const output = document.querySelector("#output");
const idLabel = document.querySelector("#idContainer label");

function updateNotesField() {
  const value = attendantType.value;
  //console.log("update-notes works in theory.")
  if (value === "student") {
    //console.log("it knows what many is");
    idContainer.hidden = false;
    idLabel.textContent = "Student #";
  }
  else if (value === "guest") {
    idContainer.hidden = false;
    idLabel.textContent = "Access Code";
  }

  else {
    idContainer.hidden = true;
  }

  /*if (value.hidden === true) {
    console.log("it is still hidden");
  }
  else if (value.hidden === false) {
    console.log("it isn't hidden");
  }*/
  // Show the travel notes on the form if they are choosing many campuses and require it
  
}

attendantType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
    console.log("button works")
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.attendantType.value;
  const eventDate = form.eventDate.value;
  const ID = identification.value.trim();
  // Validate the input
  // Let the user know to select at least one campus

  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note

  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }
  else if (type === "guest" && ID != "EVENT131") {
    output.textContent = "You don't know the code at all do you? You Brigand!";
  }
  else if (type === "student" && ID.length != 9) {
    output.textContent = "Student # must be 9 digits";
  }

  else {

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

    form.reset();
  }
  updateNotesField();
});
          