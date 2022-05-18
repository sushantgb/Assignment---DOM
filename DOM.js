//initialisation of button event in the variable
var clickVal = document.getElementById("btn");

//adding events to the button
clickVal.addEventListener("click" , eventfunction);
clickVal.addEventListener("mouseover" , eventfunction2);
clickVal.addEventListener("mouseout" , eventfunction3);

//-----------functions definitions-------

//function definition for clicked
function eventfunction() {
    document.getElementById("event").innerHTML = "Button is clicked!";
}
//function definition for mouse over
function eventfunction2() {
    document.getElementById("event").innerHTML = "Mouse over button!";
}
//function definition for mouse out
function eventfunction3() {
    document.getElementById("event").innerHTML = "Mouse out of button!";
}


