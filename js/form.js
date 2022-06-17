// CS601 Assignment 4
// W. Alex Wikiel
// strict is disabled


function validateForm() {
    let readyToSubmit = true;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let inquiryRadBtn = document.getElementsByName("inquirytype");
    let message = document.getElementById("message");
    
    // Check First Name
    let firstNameError = document.getElementById("errFName");
    if (isNotAlpha(firstName) || isTooShort(firstName)) {
        firstNameError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        firstNameError.style.visibility = "hidden";
    }

    // Check Last Name 
    let lastNameError = document.getElementById("errLName");
    if (isNotAlpha(lastName) || isTooShort(lastName)) {
        lastNameError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        lastNameError.style.visibility = "hidden";
    }

    //Check Email
    
    let eMailError = document.getElementById("errEMail");
    if (isEmailValid(email)) {
        eMailError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        eMailError.style.visibility = "hidden";
    }

    // Check Inquiry
    let inquiryError = document.getElementById("errInquiry");
    if (!isSelectionMade(inquiryRadBtn)) {
        inquiryError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        inquiryError.style.visibility = "hidden";
    }

    // Check Inquiry
    let msgError = document.getElementById("errMessage");
    console.log(message.value)
    console.log(message)
    if (message.value.length === 0) {
        msgError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        msgError.style.visibility = "hidden";
    }

    // for debugging
    //return false; 
    return readyToSubmit;
}

// is string less then 3 characters
function isTooShort(str) {
    if (str.length > 1) {
        return false;
    } else {
        return true;
    }
}

// does the string contain non alpha characters
function isNotAlpha(str) {
    const letters = /^[a-zA-Z]+$/;

    if (str.match(letters)) {
        return false;
    } else {
        return true;
    }
}

// check is email pattern using regex
function isEmailValid(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    //console.log(regex.test(email))
    return !regex.test(email);
}

// Check is user made a selection on color
function isSelectionMade(collection) {
    for (let i = 0; i < collection.length; i++)
    {
        if(collection[i].checked) {
            return true;
        }
    } 
    return false;
}