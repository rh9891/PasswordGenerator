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