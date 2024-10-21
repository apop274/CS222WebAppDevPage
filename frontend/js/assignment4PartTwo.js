function convert() {
    // Get the value entered by the user and the selected unit
    const value = parseFloat(document.getElementById('value').value);
    const unit = document.getElementById('unit').value;

    // Get the selected conversion option (radio button)
    const conversion = document.querySelector('input[name="conversion"]:checked').value;

    // Validate if the input value is a number
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    let result = 0;
    if (unit === 'inches' && conversion === 'centimeters') {
        result = value * 2.54;
        displayResult(value, 'Inches', result.toFixed(1), 'Centimeters');
    } else if (unit === 'centimeters' && conversion === 'inches') {
        result = value / 2.54;
        displayResult(value, 'Centimeters', result.toFixed(1), 'Inches');
    } else {
        alert("Make sure you are converting to a different unit.");
    }
}

function displayResult(initialValue, initialUnit, convertedValue, convertedUnit) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${initialValue} ${initialUnit} converts to ${convertedValue} ${convertedUnit}`;
}
