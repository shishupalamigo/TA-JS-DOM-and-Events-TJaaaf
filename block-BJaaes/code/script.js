let form = document.querySelector("form");

let inputError = "";

function checkForNumbers(str) {
   return str.split("").some(e => Number(e));
}

function checkForCharacter(str) {
    return str.split('').some(e => e == `@`);
}
function allAreNumbers(str) {
    return str.split("").every(e => Number(e) === 0 ? true: Number(e));
}

// console.log(checkForNumbers("hello"));
let userNameElm = document.getElementById("user-name");
    userNameElm.addEventListener("blur", () => {
    if (userNameElm.value === "") {
        inputError = "User Name Can't Be Empty";
        userNameElm.classList.add("error");
        userNameElm.nextElementSibling.innerText = inputError;
        userNameElm.nextElementSibling.style.color = "red";
    } else if (userNameElm.value.length < 4) {
        inputError = "User Name Can't be  Less than 4 Characters";
        userNameElm.classList.add("error");
        userNameElm.nextElementSibling.innerText = inputError;
        userNameElm.nextElementSibling.style.color = "red";

    } else {
        userNameElm.classList.add("success");
        userNameElm.classList.remove("error");
        inputError = "";
    }
});

let nameElm = document.getElementById("name");
nameElm.addEventListener("blur", () => {
if (nameElm.value === "") {
    inputError = "Name Can't Be Empty";
    nameElm.classList.add("error");
    nameElm.nextElementSibling.innerText = inputError;
    nameElm.nextElementSibling.style.color = "red";
}
else if (checkForNumbers(nameElm.value)) {
    inputError = "You can't use number in the name field";
    nameElm.classList.add("error");
    nameElm.nextElementSibling.innerText = inputError;
    nameElm.nextElementSibling.style.color = "red";
} else {
    nameElm.classList.add("success");
    nameElm.classList.remove("error");
    inputError = "";   
}    
});

let emailElm = document.getElementById("email");
emailElm.addEventListener("blur", () => {
if (emailElm.value === "") {
    inputError = " Email Can't Be Empty";
    emailElm.classList.add("error");
    emailElm.nextElementSibling.innerText = inputError;
    emailElm.nextElementSibling.style.color = "red";
}    
  else if (!checkForCharacter(emailElm.value)) {
    inputError = "Not a Valid Email";
    emailElm.classList.add("error");
    emailElm.nextElementSibling.innerText = inputError;
    emailElm.nextElementSibling.style.color = "red";
} else if (emailElm.value.length < 6) {
    inputError = "Email can't be less than 6 characters ";
    emailElm.classList.add("error");
    emailElm.nextElementSibling.innerText = inputError;
    emailElm.nextElementSibling.style.color = "red";
} else {
    emailElm.classList.remove("error");
    emailElm.classList.add("success");
    inputError = "";
}
});
let phoneElm = document.getElementById("phone");
phoneElm.addEventListener("blur", () => {
    console.log('i am blurred');
    if (!allAreNumbers(phoneElm.value)) {
        console.log('i am blurred error');
        inputError = "Phone number can only contain numbers";
        phoneElm.classList.add("error");
        phoneElm.nextElementSibling.innerText = inputError;
        phoneElm.nextElementSibling.style.color = "red";
    }
    else if (phoneElm.value === "") {
        inputError = "Phone Number Can't Be Empty";
        phoneElm.classList.add("error");
        phoneElm.nextElementSibling.innerText = inputError;
        phoneElm.nextElementSibling.style.color = "red";
    }    
    else if (phoneElm.value.length < 7) {
        inputError = "Phone Number can't be less than 7 characters ";
        phoneElm.classList.add("error");
        phoneElm.nextElementSibling.innerText = inputError;
        phoneElm.nextElementSibling.style.color = "red";
    } else {
        phoneElm.classList.remove("error");
        phoneElm.classList.add("success");
        inputError = "";
    }
});

let passwordElm = document.getElementById("password");
let confirmPasswordElm = document.getElementById("confirm-password");

passwordElm.addEventListener("blur", () => {
if (passwordElm.value === "") {
    inputError = "Password Can't Be Empty";
    passwordElm.classList.add("error");
    passwordElm.nextElementSibling.innerText = inputError;
    passwordElm.nextElementSibling.style.color = "red";
} else {
    passwordElm.classList.add("success");
    passwordElm.classList.remove("error");
    inputError = "";
}
});

confirmPasswordElm.addEventListener("blur", () => {
 if (confirmPasswordElm.value === "") {
    inputError = " Confirm Password Can't Be Empty";
    confirmPasswordElm.classList.add("error");
    confirmPasswordElm.nextElementSibling.innerText = inputError;
    confirmPasswordElm.nextElementSibling.style.color = "red";
} 
else if (passwordElm.value !== confirmPasswordElm.value) {
    inputError = "Password and confirm password must be same!";
    confirmPasswordElm.classList.add("error");
    confirmPasswordElm.nextElementSibling.innerText = inputError;
    confirmPasswordElm.nextElementSibling.style.color = "red";
} else if (passwordElm.value === confirmPasswordElm.value) {
    
    confirmPasswordElm.classList.add("success");
    confirmPasswordElm.classList.remove("error");
    inputError = "";
    passwordElm.classList.add("success");
}
});

let allInputElements = document.querySelectorAll("input");

function resetFields() {
    allInputElements.forEach(input => input.value = '');
}

function handleSubmit(event) {
    event.preventDefault();
     
    let allInputsArray = Array.from(allInputElements);

    let success = allInputsArray.every(e => {
        return e.classList.contains("success"); 
    });
    
    if (success === true) {
        alert("User Added SucessFully");
        resetFields();
    }
}




form.addEventListener("submit", handleSubmit);

// Username can't be less than 4 characters
// Name can't be numbers
// Email must contain the symbol @
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same.
// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers    