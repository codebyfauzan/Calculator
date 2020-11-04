// Calculator Object
const calculator = {
    operand1: null,
    operand2: null,
    operator: null,
    displayNumber: '0'
}

// Checking zero number
function zeroCheck(number) {

    if (calculator.displayNumber == '0' && number == '.') {
        calculator.displayNumber += number;
    } else if (calculator.displayNumber == '0') {
        calculator.displayNumber = number;
    } else {
        calculator.displayNumber += number;
    }
}


// Handle input number
function inputNumber(number) {

    if (calculator.operator == null) {
        calculator.operand1 = calculator.displayNumber;
        // calculator.arr.push(number);
        // calculator.arr[++top] += number;
    } else {
        calculator.operand2 = calculator.displayNumber;
        // calculator.arr.push(number);
        // calculator.arr[++top] += number;
    }
    
}

// Update input and result
const display = document.querySelector('.top-layer');
function updateDisplay() {
    display.innerHTML = calculator.displayNumber;
}

// Clear display board
function clearCalculator() {
    calculator.operand1 = null;
    calculator.operand2 = null;
    calculator.operator = null;
    calculator.displayNumber = '0';
}

// Handle percent number
function handlePercent() {

    if (calculator.operand1 != null && calculator.operator == null) {
        calculator.operand1 = parseFloat(calculator.operand1) / 100;
        calculator.displayNumber = calculator.operand1;
    } else if (calculator.operand2 != null && calculator.operator != null) {
        calculator.operand2 = parseFloat(calculator.operand2) / 100;
        calculator.displayNumber = calculator.operand2;
    }

}

function handleDelete() {

    if (calculator.displayNumber != ['0']) {
        return calculator.displayNumber.pop();
    }
    
    // calculator.displayNumber = [];
    // // let arr = [calculator.displayNumber];
    // let top =  calculator.displayNumber.length - 1;

    // // calculator.displayNumber = arr[top--];
    // return calculator.displayNumber[top--];
    // console.log(calculator.displayNumber);
    // // alert('halo');
}

// Handle input operator
function handleOperator(operator) {
    // if (calculator.operator != null) {
    //     alert('operator telah ditentukan');
    // }
    if (calculator.operand1 != null && operator != '=') {
        calculator.operator = operator;
        calculator.displayNumber = '';
    }
}

// Calculate numbers
function Calculation() {
    if (calculator.operand1 == null || calculator.operand2 == null) {
        alert('anda belum memasukkan angka');
        return;
    }

    let result;
    if (calculator.operator == '+') {
        result = parseFloat(calculator.operand1) + parseFloat(calculator.operand2);
    } else if (calculator.operator == '-') {
        result = parseFloat(calculator.operand1) - parseFloat(calculator.operand2);
    } else if (calculator.operator == 'x') {
        result = parseFloat(calculator.operand1) * parseFloat(calculator.operand2);
    } else {
        result = parseFloat(calculator.operand1) / parseFloat(calculator.operand2);
    }

    calculator.displayNumber = result;
    calculator.operand1 = calculator.displayNumber;
}


// Handle All Function
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {

    updateDisplay();

    if (e.target.classList.contains('equal')) {
        Calculation();
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
        inputNumber(e.target.innerText);
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