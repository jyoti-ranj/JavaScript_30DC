const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirm_password = document.getElementById("Conpassword");
const submit = document.getElementById("btn");



form.addEventListener("submit", (e)=>{
    e.preventDefault();

    ValidateInputs();
})
const ValidateInputs =()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = Confirm_password.value.trim();

    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank");
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank");
    }
    else if (!isValidEmail(emailValue)){
        setErrorFor(email, "Provide a valid mail address")
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }
    else if(passwordValue.length < 8){
        setErrorFor(password, "Password must be at least 8 characters");
    }
    else{
        setSuccessFor(password);
    }
    
    if(cpasswordValue === ""){
        setErrorFor(Confirm_password, "Password cannot be blank");
    }
    else if(passwordValue !== cpasswordValue){
        setErrorFor(Confirm_password, "Passwords do not match");
    }
    else{
        setSuccessFor(Confirm_password);
    }
    
}

const setErrorFor = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;

  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccessFor = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = " ";
    
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}