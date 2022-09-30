//DOM Elements
const formSignUp = document.getElementById('form-signup');
formSignUp.addEventListener('submit', sendSignUp); // hydration 

function sendSignUp( e ) {
    e.preventDefault();
    if ( !validateFormInputs() ) {
        return; // fait rien
    }

    // Form display none + Msg Validation!
    console.log("Envoyé!");
}

// Patterns RegExp
const regExp2Char = /^[A-Za-zôéèçà\s]{2,}$/; // ! espace \s
const regexName = /^[A-Z][A-Za-zéç]+(\s[A-Z][A-Za-zéç]+)*$/; // Majuscule en premier
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// Microsoft
const regexAddress = /^[A-Za-z0-9éç°',]+(\s[A-Za-z0-9éç°',]+)*$/; 
//[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}


function validateFormInputs() {
    const elFirst = document.getElementById('first');
    const elLast = document.getElementById('last');
    const elMail = document.getElementById('email');
    const elQuantity = document.getElementById('quantity');
    const allCheckBoxes = document.querySelectorAll('.checkbox-input');

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
    

    //...


    return true;
}

//Validate values
let validInputs = [false, false, false, false, false];

// Regexp
function check2Characters(value) {
    return /^[A-Za-z]{2,}$/.test(value);
}


//Events
/*
elFirst.addEventListener('input', function(e) {
    validInputs[0] = check2Characters(e.target.value);
    printDebug();
});

elLast.addEventListener('input', function(e) {
    validInputs[1] = check2Characters(e.target.value);
    printDebug();
});

elMail.addEventListener('input', function(e) {
    // RegExp from the Web ...
    const gabarit = new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");
    validInputs[2] = gabarit.test(e.target.value);
    printDebug();
});

elQuantity.addEventListener('input', function(e) {
    validInputs[3] = /^[0-9]+$/.test(e.target.value);
    printDebug();
})
*/
// find
function checkBoxValid( allCheckBoxes ) {
    for (const checkbox of allCheckBoxes) {
        if (checkbox.checked) {
            return true; // si un seul est checké on sort de la fonction!
        }
    }
    return false;
}


// allCheckBoxes.forEach( function(checkbox) {
//     // checkbox.addEventListener('change', function(e) { 
//     //     validInputs[4] = e.target.checked;
//     //     printDebug();
//     // });
// });


// Helper debug print current validations
function printDebug() {
    console.log(validInputs);
}