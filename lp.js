s = Math.floor(Math.random() * 6)
function h() {
    document.getElementById("demo0").innerHTML = "Today's lucky no is = " + s;
}
function first(x) {
    x.style.display = 'none';
    y = Math.floor(Math.random() * 11)
    document.getElementById("demo1").innerHTML = "Your no is = " + y;
    if (s == y) {
        document.getElementById("demo2").innerHTML = "You won the lottery"
    }
    else {
        document.getElementById("demo2").innerHTML = "You lose the lottery, but you have 2 more atempts left"
    }
}
function second(m) {
    m.style.display = 'none';
    z = Math.floor(Math.random() * 11)
    document.getElementById("demo1").innerHTML = "Your no is = " + z;
    if (s == z) {
        document.getElementById("demo2").innerHTML = "You won the lottery"
    }
    else {
        document.getElementById("demo2").innerHTML = "You lose the lottery again, but you have 1 more ateempts left"
    }
}
function third(n) {
    n.style.display = 'none';
    a = Math.floor(Math.random() * 11)
    document.getElementById("demo1").innerHTML = "Your no is = " + a;
    if (s == a) {
        document.getElementById("demo2").innerHTML = "You won the lottery"
    }
    else {
        document.getElementById("demo2").innerHTML = "You lose the lottery again, no more chances"
    }
}