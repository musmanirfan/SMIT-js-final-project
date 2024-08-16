
function convertFun() {
    const inputUnit = document.querySelector("#input-unit").value;
    const targetUnit = document.querySelector("#target-unit").value;
    const temperatureValue = parseFloat(document.querySelector("#temperature-value").value);
    
    let convertedValue;

    if (inputUnit === "Celsius" && targetUnit === "Fahrenheit") {
        convertedValue = (temperatureValue * 9/5) + 32;
    } else if (inputUnit === "Celsius" && targetUnit === "Kelvin") {
        convertedValue = temperatureValue + 273.15;
    } else if (inputUnit === "Fahrenheit" && targetUnit === "Celsius") {
        convertedValue = (temperatureValue - 32) * 5/9;
    } else if (inputUnit === "Fahrenheit" && targetUnit === "Kelvin") {
        convertedValue = ((temperatureValue - 32) * 5/9) + 273.15;
    } else if (inputUnit === "Kelvin" && targetUnit === "Celsius") {
        convertedValue = temperatureValue - 273.15;
    } else if (inputUnit === "Kelvin" && targetUnit === "Fahrenheit") {
        convertedValue = ((temperatureValue - 273.15) * 9/5) + 32;
    }else if(temperatureValue === ""){
        alert("plz inter value")
    } else {
        convertedValue = temperatureValue;
    }

    document.querySelector("#output").innerText = `😗 ${convertedValue} ${targetUnit}`;
};
