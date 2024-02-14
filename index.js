
const display = document.getElementById("display");


document.addEventListener("DOMContentLoaded", function(){
    display.value = "0";
});

function appendTodisplay(value) {
    if (display.value === "0") {
        display.value = "";
    }
    if (value === '*') {
        display.value += 'x';
    } else if (value === '/') {
        display.value += '÷';
    } else {
        display.value += value;
    }
}


function clearDisplay() {
    display.value = "0"; 
}


function calculate() 
{
    let expression = display.value;
    expression = expression.replace(/x/g, '*');
    expression = expression.replace(/÷/g, '/');
    try {
        let result = eval(expression);
        if (isNaN(result)) {
            display.value = "Math Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Syntax Error";
    }
}
function changeSign()
{
    let currentValue = parseFloat(display.value);
    display.value = -currentValue 
}

function percentage()
{
    let currentValue = parseFloat(display.value);
    display.value = currentValue/100;
}


/*
    PARA DESPUES
agregar funcion para que la calculadora muestre AC en el boton de clear cuando no hay nada en el display, pero cuando hay un numero 
o una operacion en proceso muestre una C

*/