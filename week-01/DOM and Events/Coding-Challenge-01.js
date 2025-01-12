// Selecting required elements
const againButton = document.querySelector(".again");
const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const scoreElement = document.querySelector(".score");
const guessInput = document.querySelector(".guess");

// Initial values
let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1; // Random secret number between 1 and 20

// Function to reset the game
function resetGame() {
  // Restore initial values
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1; // Generate new secret number

  // Update the UI elements
  messageElement.textContent = "Start guessing..."; // Reset message
  numberElement.textContent = "?"; // Reset the number
  numberElement.style.width = "15rem"; // Reset the width
  scoreElement.textContent = "Score: 20"; // Reset the score
  guessInput.value = ""; // Clear the guess input

  // Reset background color
  document.body.style.backgroundColor = "#222"; // Reset background color
}

// Attach event listener to the "Again!" button
againButton.addEventListener("click", resetGame);
