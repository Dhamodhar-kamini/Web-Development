const inputField = document.getElementById('numberInput');
const resultText = document.getElementById('result');

inputField.addEventListener('input', function () {
    const inputValue = inputField.value.trim();

    // Check if the input is a valid number
    if (!/^-?\d+$/.test(inputValue)) {
        resultText.textContent = "Please enter a valid number.";
        return;
    }

    const number = parseInt(inputValue, 10);

    // Check for negative numbers
    if (number < 0) {
        resultText.textContent = "Enter a positive value.";
        return;
    }

    // Check if the number is even or odd
    if (number % 2 === 0) {
        // Even number: show the next 3 even numbers
        const nextEvens = [number + 2, number + 4, number + 6];
        resultText.textContent = `Next 3 even numbers: ${nextEvens.join(', ')}`;
    } else {
        // Odd number: show the next 3 odd numbers
        const nextOdds = [number + 2, number + 4, number + 6];
        resultText.textContent = `Next 3 odd numbers: ${nextOdds.join(', ')}`;
    }
});