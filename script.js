

const regsiterForm = document.querySelector('.register-form');
const submitBtn = document.getElementById('submit-btn');
const submissionStatus = document.querySelector('.submission-status');

// input values 
const firstName = document.getElementById('firstname'),
      lastName = document.getElementById('lastname'),
      emailAddr = document.getElementById('email'),
      phoneNumber = document.getElementById('phonenumber'),
      password = document.getElementById('password'),
      confirmPassword = document.getElementById('confirm-password');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValidForm = validateInputValues();
    if(isValidForm){
        submissionStatus.classList.add('successMessage');
        submissionStatus.textContent = "Registration succeeded!";
    } else {
        submissionStatus.classList.add('errorMessage');
        submissionStatus.textContent = "Registration failed!";
    }

    setTimeout(() => {
        submissionStatus.classList.remove('errorMessage', 'successMessage');
    }, 1500);
});

function validateInputValues(){
    let inputValidationStatus = [];
    if(validateName(firstName.value)){
        inputStatus(true, firstName);
        inputValidationStatus[0] = true;
    } else {
        inputStatus(false, firstName);
        inputValidationStatus[0] = false;
    }

    if(validateName(lastName.value)){
        inputStatus(true, lastName);
        inputValidationStatus[1] = true;
    } else {
        inputStatus(false, lastName);
        inputValidationStatus[1] = false;
    }

    if(validateEmail(emailAddr.value)){
        inputStatus(true, emailAddr);
        inputValidationStatus[2] = true;
    } else {
        inputStatus(false, emailAddr);
        inputValidationStatus[2] = false;
    }

    if(validatePhoneNo(phoneNumber.value)){
        inputStatus(true, phoneNumber);
        inputValidationStatus[3] = true;
    } else {
        inputStatus(false, phoneNumber);
        inputValidationStatus[3] = false;
    }

    if(validatePassword(password.value)){
        inputStatus(true, password);
        inputValidationStatus[4] = true;
    } else {
        inputStatus(false, password);
        inputValidationStatus[4] = false;
    }

    if(confirmPassword.value.trim() !== "" && validateConfirmPassword(password.value, confirmPassword.value)){
        inputStatus(true, confirmPassword);
        inputValidationStatus[5] = true;
    } else {
        inputStatus(false, confirmPassword);
        inputValidationStatus[5] = false;
    }

    return (inputValidationStatus.includes(false) ? false : true);
}

// validate first and lastname 
function validateName(nameTxt){
    const nameRegex = /^[A-Za-z]+$/; // firstname or lastname containing only letters
    return nameRegex.test(nameTxt);
}

// validate email address
function validateEmail(emailTxt){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(emailTxt);
}

// validate phonenumber
function validatePhoneNo(phoneTxt){
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    /* supports following number formats
        (123) 456-7890
        (123)456-7890
        123-456-7890
        123.456.7890
        1234567890
        +31636363634
        075-63546725
    */
   return phoneRegex.test(phoneTxt);
}

// validate password 
function validatePassword(passwordTxt){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    return passwordRegex.test(passwordTxt);
}

// validate confirm password
function validateConfirmPassword(passwordTxt, confirmPasswordTxt){
    return (passwordTxt == confirmPasswordTxt);
}


// error or success status
function inputStatus(status, input){
    let inputGroup = input.parentElement;
    if(status){
        inputGroup.classList.add('success');
    } else {
        inputGroup.classList.add('error');
    }

    setTimeout(() => {
        inputGroup.classList.remove('success', 'error');
    }, 1500);
}