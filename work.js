/*s = Math.floor(Math.random() * 6)
function happy1() {
    document.getElementById("demo0").innerHTML = "Today's lucky no is = " + s;
}


function first(x) {
    x.style.display = 'none';
    y = Math.floor(Math.random() * 11)
    document.getElementById("demo1").innerHTML = "Your no is = " + y;
    if (s == y){
        document.getElementById("demo2").innerHTML ="You won the lottery"
    }
    else {
        document.getElementById("demo2").innerHTML ="You lose the lottery, but you have 2 more atempts left"
    }
}


function second() {
    z = Math.floor(Math.random() * 11)
    document.getElementById("demo1").innerHTML = "Your no is = " + z;
    if (s == z){
        document.getElementById("demo2").innerHTML ="You won the lottery"
    }
    else {
        document.getElementById("demo2").innerHTML ="You lose the lottery again, but you have 1 more ateempts left"
    }
}
function third() {
    a = Math.floor(Math.random() * 11)
    document.getElementById("demo1").innerHTML = "Your no is = " + a;
    if (s == a){
        document.getElementById("demo2").innerHTML ="You won the lottery"
    }
    else {
        document.getElementById("demo2").innerHTML ="You lose the lottery again, no more chances"
    }
}

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

function happy() {
    var a = prompt("Please enter no. from 0 to 10");
     if(a == 0) {
      document.getElementById("demo").innerHTML =
      "0 is even, neither prime nor composite" ;
     }
      else if  (a == 1) {
        document.getElementById("demo").innerHTML =
        "1 is odd and prime" ;
       }
      else if(a == 2) {
        document.getElementById("demo").innerHTML =
        "2 is even and prime" ;
      }
       else if (a == 3) {
        document.getElementById("demo").innerHTML =
        "3 is odd and prime" ;
      }
       else if (a == 4) {
        document.getElementById("demo").innerHTML =
        "4 is even and composite" ;
      }
       else if (a == 5) {
        document.getElementById("demo").innerHTML =
        "5 is odd and prime" ;
      }
       else if (a == 6) {
        document.getElementById("demo").innerHTML =
        "6 is even and composite" ;
      }
       else if (a == 7) {
        document.getElementById("demo").innerHTML =
        "7 is odd and prime" ;
      }
       else if (a == 8) {
        document.getElementById("demo").innerHTML =
        "8 is even and composite" ;
      }
       else if (a == 9) {
        document.getElementById("demo").innerHTML =
        "9 is odd and composite" ;
      }
       else if (a == 10) {
        document.getElementById("demo").innerHTML =
        "10 is even and composite" ;
      }
      else {
    document.getElementById("demo").innerHTML = "Invailed";
  }
}*/
