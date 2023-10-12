let convertBtn = document.getElementById("btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let litreEl = document.getElementById("litre-el");
let kilogramEl = document.getElementById("kilogram-el");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const gallonsToLitre = 3.78541;
const poundToKilo = 0.453592;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value); 

    let metersToFeetValue = baseValue * meterToFeet;
    let feetToMeterValue = baseValue * feetToMeter;
    let litersToGallonsValue = baseValue * literToGallon;
    let gallonsToLitersValue = baseValue * gallonsToLitre;
    let kilosToPoundsValue = baseValue * kiloToPound;
    let poundsToKilosValue = baseValue * poundToKilo;

    lengthEl.textContent = `${baseValue} meters = ${metersToFeetValue.toFixed(2)} feet | ${baseValue} feet = ${feetToMeterValue.toFixed(2)} meters`;
    litreEl.textContent = `${baseValue} liters = ${litersToGallonsValue.toFixed(2)} gallons | ${baseValue} gallons = ${gallonsToLitersValue.toFixed(2)} liters`;
    kilogramEl.textContent = `${baseValue} kilos = ${kilosToPoundsValue.toFixed(2)} pounds | ${baseValue} pounds = ${poundsToKilosValue.toFixed(2)} kilos`;
});
