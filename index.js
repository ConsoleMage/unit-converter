/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const convertBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("user-input");

const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
    let feetCalculation = (userInput.value * 3.28084).toFixed(3);
    let meterCalculation = (userInput.value / 3.28084).toFixed(3);
    length.innerHTML = `${userInput.value} meters = ${feetCalculation} feet | ${userInput.value} feet = ${meterCalculation} meters`;
});

convertBtn.addEventListener("click", function() {
    let gallonsCalculation = (userInput.value * 0.264172).toFixed(3);
    let litersCalculation = (userInput.value / 0.264172).toFixed(3);
    volume.innerHTML = `${userInput.value} liters = ${gallonsCalculation} gallons | ${userInput.value} gallons = ${litersCalculation} liters`;
});

convertBtn.addEventListener("click", function() {
    let poundsCalculation = (userInput.value * 2.20462).toFixed(3);
    let kilosCalculation = (userInput.value / 2.20462).toFixed(3);
    mass.innerHTML = `${userInput.value} kilos = ${poundsCalculation} pounds | ${userInput.value} pounds = ${kilosCalculation} kilos`;
});
