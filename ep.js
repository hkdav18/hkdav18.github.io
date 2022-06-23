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
}