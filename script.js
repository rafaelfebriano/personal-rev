let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value) * Math.PI / 180);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value) * Math.PI / 180);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value) * Math.PI / 180);
    } catch (e) {
        display.value = 'Error';
    }
}
