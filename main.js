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
};

// Event listener.
generateElement.addEventListener("click", () => {
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
});

// Function to generate password.
function generatePassword(lower, upper, number, symbol, length) {
    // Initializing the password variable. Creates a string that will be continuously built upon, dependent on what the user chooses as their password parameters.
    let generatedPassword = "";
    // Filters out the unchecked password parameters.
    const typesCount = lower + upper + number + symbol;
    console.log("typesCount: ", typesCount);

    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log("typesArray", typesArray);

    if (typesCount === 0) {
        return "";
    }
    // Loop over length and call the generator function for each parameter.
    
    // Adds the final password to the password variable and returns the result.
}

// Function to generate random lowercase.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Function to generate random uppercase.
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Function to generate random numbers.
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Function to generate random symbol.
function getRandomSymbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
};