// CS601 Assignment 4
// W. Alex Wikiel
// strict is disabled
//"use strict"; //https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/

// validate the elements based on assignment rules (See README.MD)
function validateForm() {
    console.log("got here")
    alert("ndhjbdhb")
}
function validateForm1() {
    let readyToSubmit = true;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let facilitator = document.getElementById("facilitator").value;
    let colorRadBtn = document.getElementsByName("color");
    let pLanfChkBox = document.getElementsByName("plang");

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

    // Check Facilitator
    let facilitatorError = document.getElementById("errFacil");
    if (isNotAlpha(facilitator) || isTooShort(facilitator) ||isNotFacilitator(facilitator)) {
        facilitatorError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        facilitatorError.style.visibility = "hidden";
    }

    // Programming Language 
    let programmingError = document.getElementById("errProg");
    if (!isSelectionMade(pLanfChkBox)) {
        programmingError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        programmingError.style.visibility = "hidden";
    }

    //Check Color
    let colorError = document.getElementById("errColor");
    if (!isSelectionMade(colorRadBtn)) {
        colorError.style.visibility = "visible";
        readyToSubmit = false;
    } else {
        colorError.style.visibility = "hidden";
    }
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

// check is facilitator is in the list
function isNotFacilitator(facilitator) {
    let facilitators = ["josh","laura","fazil","harsh"];
    
    if (facilitators.includes(facilitator.toLowerCase())) {
        return false;

    } else {
        return true;
    }
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