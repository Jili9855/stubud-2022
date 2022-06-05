/*reference from 
https://chinese.freecodecamp.org/news/form-validation-with-html5-and-javascript/
by chengjun.L
*/


// Used to verify the type of data entered by the user
// const submit =document.getElementById('sumbit');

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const UserNameField = document.getElementById("firstname");
  const UserEmailField = document.getElementById("email");
  const UserPhoneField = document.getElementById("phone");
  let valid = true;

  if (!UserNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("loading");
    UserNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  if (!UserEmailField.value) {
    const emailError = document.getElementById("EmailError");
    nameError.classList.add("loading");
    UserEmailField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  if (!UserPhoneField.value) {
    const phoneError = document.getElementById("PhoneError");
    nameError.classList.add("loading");
    UserEmailField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }

  return valid;
}

/*using javascript to verify that the data entered by the user is "valid"
*/
const UserNameField = document.querySelector("input");
nameField.addEventListener("input", () => {
  nameField.setCustomValidity("");
  nameField.checkValidity();
  console.log(nameField.checkValidity());
});

nameField.addEventListener("invalid", () => {
  nameField.setCustomValidity("Please fill in your First Name.");
});

