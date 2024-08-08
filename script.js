let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = formatNumber(displayValue) || '0';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue.replace(/,/g, '')).toString();
        displayValue = formatNumber(displayValue);
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function formatNumber(value) {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}
