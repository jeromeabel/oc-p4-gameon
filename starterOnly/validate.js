// Form Global Validation
const formSignUp = document.getElementById('form-signup');
formSignUp.addEventListener('submit', sendSignUp); // hydration pattern ?

function sendSignUp( e ) {
    e.preventDefault(); // Don't send the form

    if ( !validateFormInputs() ) {
        console.log("Problème Houston!");
        return; // do nothing
    }
    // TODO : Form display none + Msg Validation!
    console.log("Envoyé!");
}

// Regexp patterns
const regexName = /^[A-Za-z][a-z]+$/; // espace ?
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexAddress = /^[A-Za-z0-9éç°',]+(\s[A-Za-z0-9éç°',]+)*$/; 
const regexNumber = /^[0-9]+$/; 
const regexDate = /([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)|((Jan(|uary)|Feb(|ruary)|Mar(|ch)|Apr(|il)|May|Jun(|e)|Jul(|y)|Aug(|ust)|Sept(|ember)|Oct(|ober)|(Nov|Dec)(|ember))([\s\-])(|([\d]+){1,2}([\s\-]|\, ))([\d]+){4})/;

// Validation settings
const inputSettings = [
    ['first', regexName, 'Veuillez entrer au moins deux caractères.'],
    ['last', regexName, 'Veuillez entrer au moins deux caractères.'],
    ['email', regexEmail, 'Veuillez entrer une adresse email valide.'],
    ['birthdate', regexDate, "Veuillez entrer date de naissance valide."],
    ['quantity', regexNumber, 'Veuillez entrer un chiffre.'],
]

const checkSettings = [
    ['location', 'Veuillez sélectionner une ville.'],
    ['checkbox1', "Veuillez accepter les conditions d'utilisations."],
]

// Main
function validateFormInputs() {

    // Check text-control inputs
    for (const input of inputSettings) {
        if (!isValidInput(input)) return false;
    }

    // Check checkboxes
    if (!isValidCheckboxes(checkSettings[0])) return false;

    // Check final checkbox 
    if (!isValidConditions(checkSettings[1])) return false;

    // All tests passed !
    return true;
}


// check
function isValidConditions( input ) {
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
function isValidCheckboxes( input ) {
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
function isValidInput( input ){
    const el = document.getElementById(input[0]);
    const parent = el.parentElement;
    if ( el.value.length > 0  && input[1].test(el.value) ) {
        clearErrorMessage(parent);
        return true;
    } else {
        setErrorMessage(parent, input[2])
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