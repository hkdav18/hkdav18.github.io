function checkPassword() {
    var password = document.getElementById("passwordBox"); 
    var passwordText = password.value; 
    if (passwordText == "Babu") {
        return true;
    }
    else if (passwordText == "babu") {
        return true;
    }
    else {
        alert("Access denied! Incorrect password!"); return false;

    }
}