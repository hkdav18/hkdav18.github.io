function happy() {
    var a = prompt("Please enter first no.");
    var b = prompt("Please enter second no.");
    var c = prompt("Please enter operator");
  
    if (c == "+") {
      document.getElementById("demo").innerHTML = Number(a) + Number(b);
    } else if (c == "-") {
      document.getElementById("demo").innerHTML = Number(a) - Number(b);
    } else if (c == "*") {
      document.getElementById("demo").innerHTML = Number(a) * Number(b);
    } else if (c == "/") {
      document.getElementById("demo").innerHTML = Number(a) / Number(b);
    } else if (c == "**") {
      document.getElementById("demo").innerHTML = Number(a) ** Number(b);
    } else if (c == "%") {
      document.getElementById("demo").innerHTML = Number(a) % Number(b);
    } else {
      document.getElementById("demo").innerHTML = "Invailed";
    }
  }