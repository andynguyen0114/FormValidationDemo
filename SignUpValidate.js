// input variables to validate on form
const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirmPassword");

const form = document.querySelector("#signup");


/**
 * Check if all inputs into form are valid 
 */
form.addEventListener('submit', function(e) {
    // prevent the form from submitting 
    e.preventDefault();

    // validate forms 
    // call each individual function to validate username, email, password, and 
    // confirm password fields 
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if(isFormValid){
        removeSuccess(usernameE1);
        removeSuccess(emailE1);
        removeSuccess(passwordE1);
        removeSuccess(confirmPasswordE1);

        console.log("Form has been submitted.");
        formReset();
        
    }
});


/**
 * Reusable utility functions 
 * - isRequired: checks for empty inputs 
 * - isBetween: checks if input is between a set length 
 * - isEmailValid: checks if email format is valid 
 * - isPasswordSecurd: checks if password is valid 
 */

// check if the input is empty or not  
const isRequired = value => value === '' ? false: true;

// check the length of the input 
const isBetween = (length,min,max) => length < min || length > max ? false : true;

// check if email is valid using regex 
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// check if a password is strong enough using regex 
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}


/**
 * Display error messages for incorrect inputs
 * @param {String} input - if textbox inputs are empty or invalid 
 * @param {*} message - red error message beneath textboxes for incorrect inputs
 */
const showError = (input, message) => {
    // get the parent element of the input field,
    // which is the <div> element that contains the form-field class 
    const formField = input.parentElement;

    // remove the success class and add the error class to the form-field element 
    formField.classList.remove('success');
    formField.classList.add('error');

    // select the <small> element inside the form-field element 
    const error = formField.querySelector('small');

    // set the error message to its textContent property of the <small> element 
    error.textContent = message;
}

/**
 * Display for correct inputs 
 * @param {String} input - if input into textboxes are correct, then textbox will turn green 
 */
const showSuccess = (input) => {
    // get the form-field element 
    const formField = input.parentElement;

    // remove the error class 
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message 
    const error = formField.querySelector('small');
    error.textContent = '';
}

/**
 * Reset input boxes from success color to original 
 */
const removeSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
}

/**
 * Check that username textbox: 
 * - is not empty,
 * - and has the correct amount of characters 
 * @returns - true if username is filled with the correct character length 
 */
const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    // trim removes whitespace from both ends of a string 
    // and returns a new string, without modifying the original string 
    const username = usernameE1.value.trim();

    if(!isRequired(username)){
        showError(usernameE1,"Username cannot be blank.");
    } else if(!isBetween(username.length,min,max)){
        showError(usernameE1,`Username must be between ${min} and ${max} characters.`);
    } else{
        showSuccess(usernameE1);
        valid = true;
    }

    return valid;
}

/**
 * Check email textbox: 
 * - is not empty, 
 * - is a valid email
 * @returns - true if email is filled in the correct format 
 */
const checkEmail = () => {
    let valid = false;
    // remove the whitespaces of email input without modifying the original string 
    const email = emailE1.value.trim();

    // check that email input is not empty and that it is valid 
    if(!isRequired(email)){
        showError(emailE1,'Email cannot be blank.');
    } else if(!isEmailValid(email)){
        showError(emailE1,'Email is not valid.');
    }else{
        showSuccess(emailE1);
        valid = true;
    }

    return valid;
}

/**
 * Check password textbox: 
 * - is not empty, 
 * - is a valid password 
 * @returns - true if password is filled in the correct format 
 */
const checkPassword = () => {
    let valid = false;
    // remove the whitespaces of password input without modifying the original string 
    const password = passwordE1.value.trim();

    if(!isRequired(password)){
        showError(passwordE1,'Password cannot be blank');
    }else if(!isPasswordSecure(password)){
        showError(passwordE1,'Password must contain at least 8 characters that include at 1 lowercase character, 1 uppercase character, 1 number, and 1 special character.');
    }else{
        showSuccess(passwordE1);
        valid = true;
    }

    return valid;

}

/**
 * Confirm password textbox:
 * - is not empty 
 * - is the same input as password 
 * @returns - true if confirm password is the same as password 
 */
const checkConfirmPassword = () => {
    let valid = false; 
    // remove whitespaces for confirm password and password textbox  
    const confirm = confirmPasswordE1.value.trim();
    const password = passwordE1.value.trim();

    if(!isRequired(confirm)){
        showError(confirmPasswordE1,'Please enter the password again');
    }else if(password != confirm){
        showError(confirmPasswordE1,'Confirm password does not match');
    }else{
        showSuccess(confirmPasswordE1);
        valid = true;
    }

    return valid;
}

/**
 * Reset form after successful submit 
 */
function formReset(){
    const form = document.getElementById('signup');
    form.reset();
}
