
//defining varables for differnt input fields
var username = document.forms['vform']['username'];

var email = document.forms['vform']['email'];

var txtDOB = document.forms['vform']["txtDOB"]
console.log(txtDOB);

var password = document.forms['vform']['password'];

var Phone = document.forms['vform']['Phone']

var password_confirm = document.forms['vform']['password_confirm'];

// varable for error
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var password_error = document.getElementById('password_error');
//var dob_error = document.getElementById('dob_error')

// for event listening

username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
//txtDOB.addEventListener('blur',dobverify,false)


// validation function
function Validate() {
    // validate name
    if (username.value.length == "") {
        username.style.border = "1px solid red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Name is required";
        username.focus();
        return false;
    }

    if (username.value.length != "") {
        var regex =  /^[a-zA-Z ]+$/;
        var ctrl = document.getElemetnById('Name');
        username.style.border = "1px solid red";
        ctrl.style.color = "red";
        name_error.textContent = "Name must be in characters between 2 to 30";
        username.focus();
        //return false;
        return regex.test(ctrl.value);
    }

    // validate email
    if (email.value == "") {
        email.style.border = "1px solid red";
        document.getElementById('email_div').style.color = "red";
        email_error.textContent = "Email is required with proper format";

        /*  const isEmailValid = (email) => {
             const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email)
                 ;
         }; */

        email.focus();
        return false;
    }
    // validate password
    if (password.value < 8) {
        password.style.border = "1px solid red";
        document.getElementById('password_div').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.textContent = "Password must be at least 8 characters";
        /*  const isPasswordSecure = (password) => {
             const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
             return re.test(password);
         };
          */
        password.focus();
        return false;
    }

    if (password.value) {
        //password bar
        let timeout;

        var password = document.getElementById('PassEntry')
        var strengthBadge = document.getElementById('StrengthDisp')

        //regExp
        var strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        var mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

        strengthBadge.style.display = 'block'

        clearTimeout(timeout);

        timeout = setTimeout(() => StrengthChecker(password.value), 500);

        if (password.value.length !== 0) {
            strengthBadge.style.display != 'block'
        } else {
            strengthBadge.style.display = 'none'
        }
    }
    // check if the two passwords match
    if (password.value != password_confirm.value) {
        password.style.border = "1px solid red";
        document.getElementById('pass_confirm_div').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.innerHTML = "The two passwords do not match";

        return false;
    }

    if (txtDOB.value == "") {
        txtDOB.style.border = "1px solid red";
        document.getElementById('dob_div').style.color = "red";
        dob_error.textContent = "date is required with proper format";
        txtDOB.focus();
        return false;

    }
}

// event handler functions
function nameVerify() {
    if (username.value != "") {
        username.style.border = "1px solid #5e6e66";
        document.getElementById('username_div').style.color = "#5e6e66";
        name_error.innerHTML = "";
        return true;
    }
}
function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid #5e6e66";
        document.getElementById('email_div').style.color = "#5e6e66";
        email_error.innerHTML = "";
        return true;
    }
}
function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid #5e6e66";
        document.getElementById('pass_confirm_div').style.color = "#5e6e66";
        document.getElementById('password_div').style.color = "#5e6e66";
        password_error.innerHTML = "";
        return true;
    }
    if (password.value === password_confirm.value) {
        password.style.border = "1px solid #5e6e66";
        document.getElementById('pass_confirm_div').style.color = "#5e6e66";
        password_error.innerHTML = "";
        return true;
    }
}

/* function dobverify(){
    if(txtDOB.value !=""){
        txtDOB.style.border="1px solid #5e6e66";
        document.getElementById('dob_div').style.color = "#5e6e66";
        document.getElementById('dob_div').style.color = "#5e6e66";
        dob_error.innerHTML = "";
        return true;
    }
}
 */

//password meter 
var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

