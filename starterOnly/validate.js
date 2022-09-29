//DOM Elements
const elFirst = document.getElementById('first');
const elLast = document.getElementById('last');
const elMail = document.getElementById('email');
const elQuantity = document.getElementById('quantity');
const allCheckBoxes = document.querySelectorAll('.checkbox-input');

//Validate values
let validInputs = [false, false, false, false, false];

//Events
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

allCheckBoxes.forEach( function(checkbox) {
    checkbox.addEventListener('change', function(e) { 
        validInputs[4] = e.target.checked;
        printDebug();
    });
});

// Regexp
function check2Characters(value) {
    return /^[A-Za-z]{2,}$/.test(value);
}

// Helper debug print current validations
function printDebug() {
    console.log(validInputs);
}