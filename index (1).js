document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('inputUnit').value;

    if (isNaN(temp)) {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let resultText = '';

    if (unit === 'C') {
        // Celsius to Fahrenheit and Kelvin
        convertedTemp = (temp * 9/5) + 32;
        resultText += `${temp} °C = ${convertedTemp.toFixed(2)} °F<br>`;
        convertedTemp = temp + 273.15;
        resultText += `${temp} °C = ${convertedTemp.toFixed(2)} K`;
    } else if (unit === 'F') {
        // Fahrenheit to Celsius and Kelvin
        convertedTemp = (temp - 32) * 5/9;
        resultText += `${temp} °F = ${convertedTemp.toFixed(2)} °C<br>`;
        convertedTemp = ((temp - 32) * 5/9) + 273.15;
        resultText += `${temp} °F = ${convertedTemp.toFixed(2)} K`;
    } else if (unit === 'K') {
        // Kelvin to Celsius and Fahrenheit
        convertedTemp = temp - 273.15;
        resultText += `${temp} K = ${convertedTemp.toFixed(2)} °C<br>`;
        convertedTemp = ((convertedTemp * 9/5) + 32);
        resultText += `${temp} K = ${convertedTemp.toFixed(2)} °F`;
    }

    document.getElementById('result').innerHTML = resultText;
}
