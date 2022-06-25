function happy() {
    
    var age = prompt("Please enter your age")
    var disease = prompt("Do you have disease(y/n)")
    
    if (age >= 45 && disease == "y"){
        document.getElementById("demo").innerHTML ="You are Eligible for covaxin and bring your reports."
    }
    else if (age >= 45 && disease == "Y"){
        document.getElementById("demo").innerHTML ="You are Eligible for covaxin and bring your reports."
    } 
    else if (age >= 45 && disease == "n"){
        document.getElementById("demo").innerHTML ="You are Eligible for covaxin."
    }
    else if (age >= 45 && disease == "N"){
        document.getElementById("demo").innerHTML ="You are Eligible for covaxin."
    }
    else if (age >= 18 && disease == "y"){
        document.getElementById("demo").innerHTML ="You are Eligible for covishield and bring your reports."
    }
    else if (age >= 18 && disease == "Y"){
        document.getElementById("demo").innerHTML ="You are Eligible for covishield and bring your reports."
    }
    else if (age >= 18 && disease == "n"){
        document.getElementById("demo").innerHTML ="You are Eligible for covishiled."
    }
    else if (age >= 18 && disease == "N"){
        document.getElementById("demo").innerHTML ="You are Eligible for covishiled."
    }
    else if (age <= 17){
        document.getElementById("demo").innerHTML ="You are not Eligible for vaccine"
    }
    else if (age <= 0){
        document.getElementById("demo").innerHTML ="Ivalid age"
    }
    else {
        document.getElementById("demo").innerHTML ="Invalid"
    }
}
