function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector("span.close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal and Reset Form inputs
function closeModal() {
  // Hide Modal
  modalbg.style.display = "none";

  // Remove Success Element
  const elSuccess = document.querySelector(".success");
  if (elSuccess) elSuccess.remove();

  // Show form inputs 
  document.querySelector('.text-label').style.display = "block";
  const inputs = document.getElementsByClassName('formData');
  for (const el of inputs) {
      el.style.opacity = 1;
      el.style.visibility = "visible";
  }

  // Btn Submit
  document.querySelector(".btn-submit").addEventListener('click', () => true);

  // Reset Form
  document.querySelector("#form-signup").reset();
}

// Close modal
closeBtn.addEventListener('click', closeModal);