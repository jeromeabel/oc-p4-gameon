//DOM Elements
const elFirst = document.getElementById('first');
const elLast = document.getElementById('last');


let validInputs = [false, false, false, false, false];

//Events
elFirst.addEventListener('input', function(e) {
    validInputs[0] = check2Characters(e.target.value);
});

elLast.addEventListener('input', function(e) {
    validInputs[1] = check2Characters(e.target.value);
});


// Regexp
function check2Characters(value) {
    return /^[A-Za-z]{2,}$/.test(value);
}

/*function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
*/


    //var gabarit=new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");
    //if (gabarit.test(mail1) )    
    // let valid = /^[A-Za-z]{2,}$/.test();