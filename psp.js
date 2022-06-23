function checkPassword() {
    var password = document.getElementById("passwordBox"); 
    var passwordText = password.value; 
    if (passwordText == "Hkdav18") {
        return true;
    }
    else {
        alert("Access denied! Incorrect password!"); return false;

    }
}