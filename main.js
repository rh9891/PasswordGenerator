// Elements.
const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");


const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Function to generate random lowercase.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function to generate random uppercase.
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function to generate random numbers.
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function to generate random symbol.
function getRandomSymbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}