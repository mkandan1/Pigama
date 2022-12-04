
function CreateUserAccount() {


    const firstNameError = document.getElementById("name-error-message");
    const emailError = document.getElementById("email-error-message");
    const passwordError = document.getElementById("pass-error-message");
    const numberError = document.getElementById("number-error-message");
    const roleError = document.getElementById("role-error-message");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const number = document.getElementById('number').value;
    const role = document.getElementById('roles').value;
    const reference = document.getElementById('reference').value;

    if (validate_firstName(name) === false) {
        return // Don't run below code
    }
    if (check_email(email) === false) {
        return  // Don't run below code
    }
    if (validate_password(pass) === false) {
        return  // Don't run below code
    }
    if (validate_number(number) === false) {
        return  // Don't run below code
    }
    if (validate_role(role) === false) {
        return  // Don't run below code
    }

    const userData = {name: name, email: email, pass: pass, number: number, role: role, reference: reference}

    fetch('/createUserAccount',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then((response)=> response.json())
    .then((data)=> {
        console.log('Created!');
    })
    .catch((error)=>{
        console.log(error);
    })

    // First name validation
    function validate_firstName(firstName) {
        // Pattern
        var firstNamePattern = /^[a-zA-Z ]*$/;
        var empty = "";

        if (firstNamePattern.test(firstName) === false) {
            // First name is not valid
            firstNameError.innerHTML = "Please enter valid name";
            return false;
        }

        else if (empty === firstName) {
            firstNameError.innerHTML = "First name can't be empty";
            return false;
        }

        else {
            // First name is valid
            firstNameError.innerHTML = "";
            return true;
        }
    }

    // Validate Email pattern
    function check_email(email) {
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (emailPattern.test(email) === false) {
            emailError.innerHTML = "Please enter valid email";
            console.log(email, emailPattern.test(email));
            return false;
        }
        else {
            emailError.innerHTML = "";
            return true;
        }
    }

    // Validate Password
    function validate_password(password) {
        var empty = "";
        if (password.length < 6) {
            passwordError.innerHTML = "Password must contain 6 characters";
            return false;
        }

        else if (empty === password) {
            passwordError.innerHTML = "Password can't be empty";
            return false;
        }

        else {
            passwordError.innerHTML = "";
            return true;
        }
    }
    // Validate Password
    function validate_number(number) {
        var numberPattern = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        if (numberPattern.test(number) === false) {
            numberError.innerHTML = "Please enter valid phone number";
            return false;
        }
        else {
            numberError.innerHTML = "";
            return true;
           
    }


    }
    
    // Validate Password
    function validate_role(role) {
        if(role === 'None'){
            roleError.innerHTML = "Choose a role"
            return false
        }
        else {
            roleError.innerHTML = ""
            return true
        }
    }
}


export default CreateUserAccount