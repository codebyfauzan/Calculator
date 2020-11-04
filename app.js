// Calculator Object
const calculator = {
    operand1: null,
    operand2: null,
    operator: null,
    displayNumber: '0',
    arr: ['0']
}

// Checking zero number
function zeroCheck(number) {

    if (calculator.displayNumber == '0' && number == '.') {
        calculator.displayNumber += number;
        calculator.arr = calculator.displayNumber.split("");
    } else if (calculator.displayNumber == '0' && number !== 'backspace') {
        calculator.displayNumber = number;
        calculator.arr = calculator.displayNumber.split("");
    } 
    else if (number === 'backspace') {
        calculator.arr = calculator.displayNumber.split("");
    } 
    else {
        calculator.displayNumber += number;
        calculator.arr = calculator.displayNumber.split("");
    }
}


// Handle input number
function inputNumber() {

    if (calculator.operator == null) {
        calculator.operand1 = calculator.displayNumber;
        calculator.arr = calculator.displayNumber.split("");
    } else {
        calculator.operand2 = calculator.displayNumber;
        calculator.arr = calculator.displayNumber.split("");
    }
    
}

// Update input and result
const display = document.querySelector('.top-layer');
function updateDisplay() {
    let trimmedString;
    if (calculator.displayNumber.length > 10) {
        trimmedString = calculator.displayNumber.substr(0, 10);
        display.innerHTML = trimmedString;
    } else {
        display.innerHTML = calculator.displayNumber;
    }
}

// Clear display board
function clearCalculator() {
    calculator.operand1 = null;
    calculator.operand2 = null;
    calculator.operator = null;
    calculator.displayNumber = '0';
    calculator.arr = ['0'];
}

// Handle percent number
function handlePercent() {

    if (calculator.operand1 != null && calculator.operator == null) {
        calculator.operand1 = parseFloat(calculator.operand1) / 100;
        calculator.displayNumber = calculator.operand1+"";
        calculator.arr = calculator.displayNumber.split("");
    } else if (calculator.operand2 != null && calculator.operator != null) {
        calculator.operand2 = parseFloat(calculator.operand2) / 100;
        calculator.displayNumber = calculator.operand2+"";
        calculator.arr = calculator.displayNumber.split("");
    }
    
}

function handleDelete() {

    if (calculator.displayNumber.length === 1 && calculator.arr.length === 1) {
        clearCalculator();
        console.log(calculator.arr);
    } 
    else if (calculator.displayNumber == '0' && calculator.arr == ['0']) {
        calculator.displayNumber = '0';
        console.log(calculator.arr);
    } 
    else if (calculator.displayNumber !== '0') {
        calculator.arr.pop();
        calculator.displayNumber = calculator.arr.join('');
        calculator.operand1 = calculator.displayNumber;
        console.log(calculator.arr);
    }
    
    
    
}


// Handle input operator
function handleOperator(operator) {

    if (calculator.operand1 != null && operator != '=') {
        calculator.operator = operator;
        calculator.displayNumber = '';
    }
}

// Calculate numbers
function Calculation(number) {
    if (calculator.operand1 == null || calculator.operand2 == null) {
        alert('anda belum memasukkan angka');
        return;
    }

    let result;
    if (calculator.operator == '+') {
        result = parseFloat(calculator.operand1) + parseFloat(calculator.operand2);
        console.log(result);
    } else if (calculator.operator == '-') {
        result = parseFloat(calculator.operand1) - parseFloat(calculator.operand2);
        console.log(result);
    } else if (calculator.operator == 'x') {
        result = parseFloat(calculator.operand1) * parseFloat(calculator.operand2);
        console.log(result);
    } else {
        result = parseFloat(calculator.operand1) / parseFloat(calculator.operand2);
        console.log(result);
    }

    calculator.displayNumber = result+"";
    calculator.arr = calculator.displayNumber.split("");    
    calculator.operand1 = calculator.displayNumber;
}


// Handle All Function
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {

    updateDisplay();

    if (e.target.classList.contains('equal')) {
        Calculation(e.target.innerText);
        updateDisplay();
    }

    if (e.target.classList.contains('delete')) {
        handleDelete();
        updateDisplay();
    }

    if (e.target.classList.contains('operator')) {
        handleOperator(e.target.innerText);
        return;
    }

    if (e.target.classList.contains('button')) {
        zeroCheck(e.target.innerText);
        inputNumber();
        updateDisplay();
    }

    if (e.target.classList.contains('percent')) {
        handlePercent();
        updateDisplay();
    }

   
    if (e.target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
    }

});