const form = document.querySelector("#eventForm");
const attendantType = document.querySelector("#attendantType");
const idContainer = document.querySelector("#idContainer");
const identification = document.querySelector("#ID");
const output = document.querySelector("#output");
const idLabel = document.querySelector("#idContainer label");

function updateNotesField() {
  const value = attendantType.value;

  if (value === "student") {

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

}

attendantType.addEventListener("change", updateNotesField);
updateNotesField();


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
          