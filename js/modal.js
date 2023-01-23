// ------------ DOM ------------- //

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector("span.close");

// ------------ EVENTS ------------- //

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener('click', closeModal);

// ------------ FUNCTIONS ------------- //

// Nav icon toggle
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Launch modal form
function launchModal() {
  modalbg.classList.add("bground--open");
}

// Close modal and reset form inputs
function closeModal() {
  // Hide modal
  modalbg.classList.remove("bground--open");

  // Remove success element
  const elSuccess = document.querySelector(".success");
  if (elSuccess) elSuccess.remove();

  // Show form inputs 
  document.querySelector('.text-label').style.display = "block";
  const inputs = document.getElementsByClassName('formData');
  for (const el of inputs) {
      el.style.opacity = 1;
      el.style.visibility = "visible";
  }

  // Submit event change callback
  formSignUp.removeEventListener('submit', closeModal);
  formSignUp.addEventListener('submit', sendSignUp);

  // Reset form
  document.querySelector("#form-signup").reset();
}