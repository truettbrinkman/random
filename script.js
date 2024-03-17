// Array of predefined phrases
const phrases = [
    "Text your crush you like her",
    "Text your mom you love her",
    "Text your dad you love him",
    "Text your ex you miss them"
];

// Function to generate a random phrase
function generateRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// Get the paragraph element and update its text with a random phrase
const paragraphElement = document.getElementById("randomPhrase");
paragraphElement.textContent = generateRandomPhrase();