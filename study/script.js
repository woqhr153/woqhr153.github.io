function forclear() {
    document.getElementById("output").innerHTML = "0"
}

function removezero() {
    var value = document.getElementById("output").innerHTML
    if (value == "0")
    value = " "
    document.getElementById("output").innerHTML = value;
}

function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
    removezero();
    document.getElementById("output").innerHTML += value;
}
function solve() {
    removezero()
    var equation = document.getElementById("output").innerHTML
    var solved = eval(equation)
    document.getElementById("output").innerHTML = solved
}

