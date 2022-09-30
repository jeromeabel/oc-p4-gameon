// Form Global Validation
const formSignUp = document.getElementById('form-signup');
formSignUp.addEventListener('submit', sendSignUp); // hydration pattern ?

function sendSignUp( e ) {
    e.preventDefault();
    if ( !validateFormInputs() ) {
        return; // do nothing
    }
    // Form display none + Msg Validation!
    console.log("Envoyé!");
}



// Add element to display error messages
function addErrorElements() {
    const inputs = document.querySelectorAll('.formData');
    for (const input of inputs) {
        const elError = document.createElement('div');
        elError.classList.add("error");
        elError.textContent = "Test";
        input.appendChild(elError);
    }
}


//const inputs = document.querySelectorAll('.formData');
//inputs[1].getElementsByClassName('text-control')
// const inputs = document.querySelectorAll('.text-control');
// inputs[0].getAttribute('id');


// RegExp Patterns 
const regExp2Char = /^[A-Za-z]{2,}$/; // ! espace \s
const regexName = /^[A-Z][A-Za-zéç]+(\s[A-Z][A-Za-zéç]+)*$/; // Majuscule en premier
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// Microsoft
const regexAddress = /^[A-Za-z0-9éç°',]+(\s[A-Za-z0-9éç°',]+)*$/; 
const regexNumber = /^[0-9]+$/; 
//Email : [A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}

function validateFormInputs() {
    // Inputs elements
    const elFirst = document.getElementById('first');
    const elLast = document.getElementById('last');
    const elMail = document.getElementById('email');
    const elQuantity = document.getElementById('quantity');
    const allCheckBoxes = document.querySelectorAll('.checkbox-input');

    // birthdate
    // formData / text-control
    // formData / checkbox-input

    // Unit tests for each inputs, check false return
    if (! isValidInput(elFirst, regExp2Char, "Veuillez entrer au moins deux caractères.") ) return false;
    if (! isValidInput(elLast, regExp2Char, "Veuillez entrer au moins deux caractères.") ) return false;
    if (! isValidInput(elMail, regexEmail, "Veuillez entrer une adresse  email valide.") ) return false;
    if (! isValidInput(elQuantity, regexNumber, "Veuillez entrer un chiffre.") ) return false;
    //if (! isValidInput(elMail, regexEmail, "Veuillez entrer une adresse valide.") ) return false;

    // If all tests are true
    return true;
}


// find
function isValidBoxes( checkboxes ) {
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            return true; // si un seul est checké on sort de la fonction!
        }
    }
    return false;
}

/*
 * 
 */
function isValidInput ( el, regexp, msgError ) {
    const value = el.value;
    console.log('isValid : ' + value );
    const elError = document.createElement("div");
    el.insertAdjacentElement('afterend', elError);
    elError.classList.add("error"); // border
    if (! regexp.test(value) ) {
        
        elError.innerHTML = msgError; 
        return false;
    } else {
        elError.innerHTML = "";
        //elError.remove();
        //el.nextElementSibling.remove();
        return true;
    }
}
/*
    const elFirstValue = elFirst.value;
    const elFirstMsg = document.getElementById('first-msg');

    if (! regExp2Char.test(elFirstValue) ) {
        elFirstMsg.textContent = "Veuillez écire un prénom valide, merci. stp"
        elFirstMsg.classList.add("data-error"); // border red
        elFirstMsg.parentElement.classList.add("data-error");
        return false;
    } else {
       // elFirstMsg.textContent = null;
        elFirstMsg = null;
    }
    */