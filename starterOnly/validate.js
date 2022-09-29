//DOM Elements
const elFirst = document.getElementById('first');
const elLast = document.getElementById('last');
const elMail = document.getElementById('email');
const elQuantity = document.getElementById('quantity');

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
    const gabarit = new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");
    validInputs[2] = gabarit.test(e.target.value);
    printDebug();
});

elQuantity.addEventListener('input', function(e) {
    validInputs[3] = /^[0-9]+$/.test(e.target.value);
    printDebug();
})


function printDebug() {
    console.log(validInputs);
}

// Regexp
function check2Characters(value) {
    return /^[A-Za-z]{2,}$/.test(value);
}