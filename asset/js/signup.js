var fname = document.querySelector('.fname');
var f_Name = document.querySelector('.f_Name');
var lname = document.querySelector('.lname');
var l_Name = document.querySelector('.l_Name');
var gender = document.querySelector('.gender');
var Gender = document.querySelector('.Gender');
var age = document.querySelector('.age');
var Age = document.querySelector('.Age');
var Password = document.querySelector('.Password');
var confirmPassword = document.querySelector('.confirmPassword');
var password = document.querySelector('.password');
var confirm_Password = document.querySelector('.confirm_Password');
var signUp = document.querySelector('.signUp');


//AGE VALIDATION

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            theEvent.preventDefault();
            age.style.border = '1px solid red';
            Age.textContent = 'Please Enter a Number';
            Age.style.color = 'red';
        }
    } else {
        age.style.border = 'none';
        Age.textContent = '';
    }
}


function validityCheck() {

//    FIRSTNAME VALIDATION

    if (document.getElementById('fname').value === '') {
        fname.style.border = '1px solid red';
        f_Name.textContent = 'Please Enter Your First Name';
        f_Name.style.color = 'red';
        return false;
    } else {
        fname.style.border = 'none';
        f_Name.textContent = '';
    }

//    LASTNAME VALIDATION

    if (document.getElementById('lname').value === '') {
        lname.style.border = '1px solid red';
        l_Name.textContent = 'Please Enter Your Last Name';
        l_Name.style.color = 'red';
        return false;
    } else {
        lname.style.border = 'none';
        l_Name.textContent = '';
    }

//    GENDER VALIDATION

    if ((document.getElementById('gender').value != 'male') && (document.getElementById('gender').value != 'female')) {
        gender.style.border = '1px solid red';
        Gender.textContent = 'Please Enter Male or Female';
        Gender.style.color = 'red';
        return false;
    } else {
        gender.style.border = 'none';
        Gender.textContent = '';
    }

//    PASSWORD VALIDATION

    if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {
        confirmPassword.style.border = '1px solid red';
        password.style.border = '1px solid red';
        confirm_Password.textContent = 'Passwords Do Not Match';
        confirm_Password.style.color = 'red';
        return false;
    } else if ((document.getElementById('password').value === document.getElementById('confirmPassword').value) && (document.getElementById('password').value != '') && (document.getElementById('confirmPassword').value != '')) {
        confirmPassword.style.border = '1px solid green';
        password.style.border = '1px solid green';
        confirm_Password.textContent = 'Match';
        confirm_Password.style.color = 'green';
        return true;
    }


}