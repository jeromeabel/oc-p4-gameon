/*
 * Validation of the sign up form
 */

// ------------ SETTINGS ------------- //

// Regexp patterns
const regexName = /^[A-z][a-z]+$/; // ? space
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexNumber = /^[0-9]+$/; 
const regexDate = /([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)|((Jan(|uary)|Feb(|ruary)|Mar(|ch)|Apr(|il)|May|Jun(|e)|Jul(|y)|Aug(|ust)|Sept(|ember)|Oct(|ober)|(Nov|Dec)(|ember))([\s\-])(|([\d]+){1,2}([\s\-]|\, ))([\d]+){4})/;

// Inputs : text, email, date, number
// const inputSettings = [
//     ['first', regexName, 'Veuillez entrer au moins deux caractères.'],
//     ['last', regexName, 'Veuillez entrer au moins deux caractères.'],
//     ['email', regexEmail, 'Veuillez entrer une adresse email valide.'],
//     ['birthdate', regexDate, "Veuillez entrer votre date de naissance."],
//     ['quantity', regexNumber, 'Veuillez entrer un chiffre.'],
// ]

const inputSettings = [
    { id: 'first', regex: regexName, errorMsg : 'Veuillez entrer au moins deux caractères.'},
    { id: 'last', regex: regexName, errorMsg : 'Veuillez entrer au moins deux caractères.' },
    { id: 'email', regex: regexEmail, errorMsg : 'Veuillez entrer une adresse email valide.'},
    { id: 'birthdate', regex: regexDate, errorMsg : 'Veuillez entrer votre date de naissance.'},
    { id: 'first', regex: regexNumber, errorMsg : 'Veuillez entrer un chiffre'}
]

// Checkboxes & radios
const checkSettings = [
    ['location', 'Veuillez sélectionner un tournoi.'],
    ['checkbox1', "Veuillez accepter les conditions d'utilisations."],
]

// Message after validation
const successMsg = "Inscription réussie !<br> 🚀";

// ------------ MAIN ------------- //

// Add the submit event to the form
const formSignUp = document.getElementById('form-signup');
formSignUp.addEventListener('submit', sendSignUp); // hydration pattern ?

// The callback function 
function sendSignUp( e ) {
    e.preventDefault(); // Don't use the default behavior of submit

    if ( !validateFormInputs() ) {
        console.log("Nous avons un problème Houston !");
        return; // Not validated : exit, do nothing
    }

    // Validation ok
    console.log("Success!");
    showSuccessMsg(successMsg);
}

/*
 * Main validation process
 * If one input is not validated, the function returns false
 * Else, all tests passed, it returns true
 * Returns a boolean
 */
function validateFormInputs() {

    // Check inputs (text-control)
    for (const obj of inputSettings) {
        if (!isValidInput(obj)) return false;
    }

    // Check location
    if (!isValidRadio(checkSettings[0])) return false;

    // Check conditions
    if (!isValidCheckbox(checkSettings[1])) return false;

    // All tests passed !
    return true;
}

// ------------ FUNCTIONS ------------- //

/* 
 * Hide elements and show the success message
 */
function showSuccessMsg(msg) {

    // Hide
    // all div.formData and p.text-label  
    document.querySelector('.text-label').style.display = "none";
    const formInputs = document.getElementsByClassName('formData');
    for (el of formInputs) {
        el.style.opacity = 0;
        el.style.visibility = "hidden";
    }

    // Show
    // Add a new element with the success message
    const elSuccess = document.createElement('h1');
    elSuccess.classList.add("success");
    formSignUp.insertBefore(elSuccess, document.querySelector('.btn-submit'));
    elSuccess.innerHTML = msg;
}

/*
 * Check a checkbox ---- and display error message
 * Returns a boolean
 */
function isValidCheckbox( input ) {
    const el = document.getElementById(input[0]);
    const parent = el.parentElement;
    if (el.checked) {
        clearErrorMessage(parent);
        return true;
    }
    setErrorMessage(parent, input[1]);
    return false;
}

/*
 * Check a group of radio buttons ---- and display error message
 * Returns a boolean
 */
function isValidRadio( input ) {
    const checkboxes = document.getElementsByName(input[0]);
    const parent = checkboxes[0].parentElement;
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            clearErrorMessage(parent);
            return true; // if once is checked => exit
        }
    }
    setErrorMessage(parent, input[1]);
    return false;
}

/*
 * Check if input value matches a regexp ---- and display error message
 * Returns a boolean
 */
function isValidInput( obj ){
    const el = document.getElementById(obj.id);
    const parent = el.parentElement;
    if ( el.value.length > 0  && obj.regexp.test(el.value) ) {
        clearErrorMessage(parent);
        return true;
    } else {
        setErrorMessage(parent, obj.errorMsg)
        return false;
    }
}

// Display error messages and clear them
function setErrorMessage (el, msg) {
    el.setAttribute("data-error", msg);
    el.setAttribute("data-error-visible", "true");
}

function clearErrorMessage (el) {
    el.setAttribute("data-error", "");
    el.setAttribute("data-error-visible", "false");
}