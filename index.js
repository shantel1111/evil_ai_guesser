const maxAttempts = 10;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(attemptCounter) {
  let playerGuess = prompt(
    `Guess the number! All guesses must be between 1 and 100. Your attempts: ${attemptCounter}`,
  );
  let convertValue = Number(playerGuess);

  while (Number.isNaN(convertValue) || convertValue < 1 || convertValue > 100) {
    playerGuess = prompt(
      "That is not a valid guess! Please enter a number between 1 and 100.",
    );
    convertValue = Number(playerGuess);
  }

  return convertValue;
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess > correctNumber) {
    alert("Too high");
  } else if (playerGuess < correctNumber) {
    alert("Too low");
  } else {
    alert("Correct");
  }
}

function game() {
  let attemptCounter = 0;
  const randomNumber = generateRandomNumber();

  let playerGuess = getPlayerGuess(attemptCounter);
  attemptCounter++;
  checkGuess(playerGuess, randomNumber);

  while (playerGuess !== randomNumber && attemptCounter < maxAttempts) {
    playerGuess = getPlayerGuess(attemptCounter);
    attemptCounter++;
    checkGuess(playerGuess, randomNumber);
  }

  if (playerGuess === randomNumber) {
    alert(`Congrats! You got it in ${attemptCounter}/${maxAttempts} tries.`);
  } else if (attemptCounter === maxAttempts) {
    alert(
      `Oh no you lost the game! You have used up all your attempts and the correct answer was ${randomNumber}`,
    );
  }
}

game();
