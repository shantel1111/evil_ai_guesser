const maxAttempts = 10;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerName() {
  let name = prompt("💡Welcome stranger, enter your name:");
  while (name !== null && (!name || name.trim() === "")) {
    name = prompt("You have to enter a name, Please enter your name here:");
  }
  if (name === null) return null;
  return name.trim();
}

function getPlayerGuess(attemptCounter, previousGuesses = []) {
  let playerGuess = prompt(
    `🤔Guess the number! All guesses must be between 1 and 100. Your attempts: ${attemptCounter}\nPrevious guesses: ${previousGuesses.length > 0 ? previousGuesses.join(", ") : "none"}`,
  );
  if (playerGuess === null) return null;
  let convertValue = Number(playerGuess);

  while (
    playerGuess.trim() === "" ||
    Number.isNaN(convertValue) ||
    !Number.isInteger(convertValue) ||
    convertValue < 1 ||
    convertValue > 100
  ) {
    if (playerGuess === null || playerGuess.trim() === "") {
      playerGuess = prompt(
        "⚠️You must enter a guess! Please enter a number between 1 and 100.",
      );
    } else if (Number.isNaN(convertValue) || !Number.isInteger(convertValue)) {
      playerGuess = prompt(
        "👎That is not a valid guess! Please enter a number between 1 and 100.",
      );
    } else {
      playerGuess = prompt(
        "☹️Out of range! Please enter a number between 1 and 100.",
      );
    }
    if (playerGuess === null) return null;
    convertValue = Number(playerGuess);
  }

  return convertValue;
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess > correctNumber) {
    return "Too high";
  } else if (playerGuess < correctNumber) {
    return "Too low";
  } else {
    return "Correct";
  }
}

function scoreCount(attempts) {
  return Math.max(100 - (attempts - 1) * 10, 10);
}

function playAgain(playerName) {
  let userChoice = prompt("Would you like to play again? (yes/no)");
  while (
    userChoice !== null &&
    (!userChoice ||
      userChoice.trim() === "" ||
      (userChoice.trim().toLowerCase() !== "yes" &&
        userChoice.trim().toLowerCase() !== "no"))
  ) {
    userChoice = prompt(`Please write yes/no, would you like to play again?`);
  }
  if (userChoice === null || userChoice.trim().toLowerCase() === "no") {
    alert(`Thanks for playing ${playerName}! bye bye!`);
  } else {
    game();
  }
}

function game() {
  const playerName = getPlayerName();
  if (playerName === null) {
    alert(`Game cancelled. Goodbye!`);
    return;
  }
  alert(`Welcome ${playerName}!\n\nScoring system:\n- Start: 100 points
    \n-Each wrong guess: -10 points\n- Minimum score: 10 points\n
    \nTry to guess the number in as few attempts as possible!`);

  let attemptCounter = 0;
  const randomNumber = generateRandomNumber();
  const previousGuesses = [];

  let playerGuess = getPlayerGuess(attemptCounter, previousGuesses);
  if (playerGuess === null) {
    alert(`Game cancelled. Goodbye!`);
    return;
  }
  attemptCounter++;
  previousGuesses.push(playerGuess);
  alert(checkGuess(playerGuess, randomNumber));

  while (playerGuess !== randomNumber && attemptCounter < maxAttempts) {
    playerGuess = getPlayerGuess(attemptCounter, previousGuesses);
    if (playerGuess === null) return;
    attemptCounter++;
    previousGuesses.push(playerGuess);
    alert(checkGuess(playerGuess, randomNumber));
  }

  if (playerGuess === randomNumber) {
    const score = scoreCount(attemptCounter);
    alert(`🥇Congrats ${playerName}! You got it in ${attemptCounter}/${maxAttempts} tries. 
      Score: ${score}, the correct answer was: ${randomNumber}`);
    playAgain(playerName);
  } else if (attemptCounter === maxAttempts) {
    alert(`⏳${playerName} you lost the game! You have used up all your attempts,
    the correct answer was: ${randomNumber}`);
    playAgain(playerName);
  }
}

game();
