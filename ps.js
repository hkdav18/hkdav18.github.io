function checkPassword() {
    var password = document.getElementById("passwordBox"); 
    var passwordText = password.value; 
    if (passwordText == "happy and babu") {
        return true;
    }
    else if (passwordText == "babu and happy") {
        return true;
    }
    else {
        alert("Access denied! Incorrect password!"); return false;

    }
}