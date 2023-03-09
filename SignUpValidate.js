// input variables to validate 
const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirm-password");

const form = document.querySelector("#signup");


form.addEventListener('submit',function(e){
    e.preventDefault();
});


// check if the input argument is empty
const isRequired = value => value === '' ? false: true;

// returns false if the length argument is not between the 
// min and max argument 
const isBetween = (length,min,max) => length < min || length > max ? false : true;

// check if email is valid by regular expression 
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// check if a password is strong by regular expression 
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}


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


const checkEmail = () => {
    let valid = false;
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


const checkPassword = () => {
    let valid = false;
    const password = passwordE1.value.trim();

    if(!isRequired(password)){
        showError(passwordE1,'Password cannot be blank');
    }else if(!isPasswordSecure(password)){
        showError(passwordE1,'Password must containt at least 8 characters that include at 1 lowercase character, 1 uppercase character, 1 number, and 1 special character.');
    }else{
        showSuccess(passwordE1);
        valid = true;
    }

    return valid;

}


const checkConfirmPassword = () => {
    let valid = false; 
    // check confirm password 
    const confirmPassword = confirmPasswordE1.value.trim();
    const password = passwordE1.value.trim();

    if(!isRequired(confirmPassword)){
        showError(confirmPasswordE1,'Please enter the password again');
    }else if(password !== confirmPassword){
        showError(confirmPasswordE1,'Confirm password does not match');
    }else{
        showSuccess(confirmPasswordE1);
        valid = true;
    }

    return valid;
}


form.addEventListener('submit', function(e) {
    // prevent the form from submitting 
    e.preventDefault();

    // validate forms 
    // call eat individual function to validate username, email, password, and 
    // confirm password fields 
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid 
    if(isFormValid){
        
    }
});


form.addEventListener('input', debounce(function(e){
    switch(e.target.id){
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));

 
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return(...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }

        // setup a new timer 
        timeoutId = setTimeout(() => {
            fn.apply(null,args)
        }, delay);
    };
    
};