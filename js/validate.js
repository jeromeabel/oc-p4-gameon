/*
 * Validation of the sign up form
 */

// ------------ SETTINGS ------------- //

// Development variable to pass tests
const avoidTests = false;

// Regexp patterns
const regexName = /^[A-ÿ]{2,}[A-ÿ\-\s]*$/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/; // from mdn + fix
const regexNumber = /^[0-9]+$/; 
const regexDate = /([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)|((Jan(|uary)|Feb(|ruary)|Mar(|ch)|Apr(|il)|May|Jun(|e)|Jul(|y)|Aug(|ust)|Sept(|ember)|Oct(|ober)|(Nov|Dec)(|ember))([\s\-])(|([\d]+){1,2}([\s\-]|\, ))([\d]+){4})/;

// Inputs : text, email, date, number
const inputSettings = [
    { id: 'first'       , regex: regexName  , errorMsg: 'Veuillez entrer au moins deux caractères.'},
    { id: 'last'        , regex: regexName  , errorMsg: 'Veuillez entrer au moins deux caractères.' },
    { id: 'email'       , regex: regexEmail , errorMsg: 'Veuillez entrer une adresse email valide.'},
    { id: 'birthdate'   , regex: regexDate  , errorMsg: 'Veuillez entrer votre date de naissance.'},
    { id: 'quantity'    , regex: regexNumber, errorMsg: 'Veuillez entrer un chiffre'}
]

// Checkboxes & radios
const checkSettings = [
    { name: 'location'  , errorMsg: "Veuillez sélectionner un tournoi." },
    { id: 'checkbox1'   , errorMsg: "Veuillez accepter les conditions d'utilisations." },
]

// Message after validation
const successMsg = "Merci pour votre inscription !";

// ------------ MAIN ------------- //

// Add the submit event to the form
const formSignUp = document.getElementById('form-signup');
formSignUp.addEventListener('submit', sendSignUp);

// The callback function 
function sendSignUp( e ) {
    e.preventDefault(); // Don't use the default behavior of submit

    if ( !avoidTests && !validateFormInputs() ) {
        console.log("We got a problem Houston !");
        return; // Not validated : exit, do nothing
    }

    // Validation ok
    console.log("Success!");
    showSuccessMsg(successMsg);

    // Submit Event change callback
    formSignUp.removeEventListener('submit', sendSignUp);
    formSignUp.addEventListener('submit', closeModal);
}

/*
 * Main validation process
 * If one input is not validated, the function returns false
 * Else, all tests passed, it returns true
 * Returns a boolean
 */
function validateFormInputs() {

    let valid = true;

    // Check inputs (text-control)
    for (const obj of inputSettings) {
        if (!isValidInput(obj)) valid = false;
    }

    // Check location
    if (!isValidRadio(checkSettings[0])) valid = false;

    // Check conditions
    if (!isValidCheckbox(checkSettings[1])) valid = false;

    // All tests passed !
    return valid;
}

// ------------ FUNCTIONS ------------- //

/* 
 * Hide elements and show the success message
 */
function showSuccessMsg(msg) {

    // Hide
    // All div.formData and p.text-label  
    document.querySelector('.text-label').style.display = "none";
    const formInputs = document.getElementsByClassName('formData');
    for (const el of formInputs) {
        el.style.opacity = 0;
        el.style.visibility = "hidden";
    }

    // Show
    // Add a new element with the success message
    const elSuccess = document.createElement('h1');
    const elBtnSubmit = document.querySelector('.btn-submit');
    elSuccess.classList.add("success");
    formSignUp.insertBefore(elSuccess, elBtnSubmit);
    elSuccess.innerHTML = msg;
}

/*
 * Check a checkbox ---- and display error message
 * Returns a boolean
 */
function isValidCheckbox(obj) {
    const el = document.getElementById(obj.id);
    const parent = el.parentElement;
    if (el.checked) {
        clearErrorMessage(parent);
        return true;
    }
    setErrorMessage(parent, obj.errorMsg);
    return false;
}

/*
 * Check a group of radio buttons ---- and display error message
 * Returns a boolean
 */
function isValidRadio(obj) {
    const checkboxes = document.getElementsByName(obj.name);
    const parent = checkboxes[0].parentElement;
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            clearErrorMessage(parent);
            return true; // if once is checked => exit
        }
    }
    setErrorMessage(parent, obj.errorMsg);
    return false;
}

/*
 * Check if input value matches a regexp ---- and display error message
 * Returns a boolean
 */
function isValidInput(obj){
    const el = document.getElementById(obj.id);
    const parent = el.parentElement;
    if ( el.value.length > 0  && obj.regex.test(el.value) ) {
        // Add a custom test for dates
        if (obj.id === 'birthdate') {
            const now = new Date(Date.now());
            const inputDate = new Date(el.value);
            if ( (now.getFullYear() - inputDate.getFullYear()) < 12 ) {
                setErrorMessage(parent, "Vous devez avoir au moins 12 ans pour participer.")
                return false;
            }
        }
        clearErrorMessage(parent);
        return true;
    } 
    setErrorMessage(parent, obj.errorMsg)
    return false;
}

// Display error messages and clear them
function setErrorMessage(el, msg) {
    el.setAttribute("data-error", msg);
    el.setAttribute("data-error-visible", "true");
}

function clearErrorMessage(el) {
    el.setAttribute("data-error", "");
    el.setAttribute("data-error-visible", "false");
}