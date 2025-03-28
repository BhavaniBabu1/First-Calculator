function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display when the clear button is clicked
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calculate the result of the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use Function constructor instead of eval for safety
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        // Show an error message if the expression is invalid
        display.value = 'Error';
    }
}

// Handle keypresses for keyboard functionality (optional)
document.addEventListener('keydown', function (event) {
    const display = document.getElementById('display');
    if (event.key >= '0' && event.key <= '9' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});
