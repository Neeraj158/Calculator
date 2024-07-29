// script.js
let currentInput = '';
let operator = null;
let previousInput = '';
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = null;
    previousInput = '';
    updateDisplay();
}
function calculateSquare() {
    const current = parseFloat(currentInput);
    if (isNaN(current)) return;
    currentInput = current * current;
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('current-operand').value = currentInput;
    document.getElementById('previous-operand').value = previousInput + (operator ? ' ' + operator : '');
}