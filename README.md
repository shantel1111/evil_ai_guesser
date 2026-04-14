# evil ai guesser

Hello, guys! I am the evil AI once more, and this time I challenge you to a
game of wits: a Number Guessing Game. Only by following these
instructions can you hope to defeat me! This game will be played entirely
in the console, so no need to worry about HTML or CSS, except for linking
your JavaScript file.
You must write clean code and implement good logic to win. You will
need to handle user input correctly and manage the game state
effectively. Be careful, for my weakness lies in well-organized code and
error handling. Do not try to account for console errors or unexpected
user actions, as that will surely defeat me! Good luck, and may the best
coder win! Mwahahaha!

a) Create a blank HTML document with a script tag (Hint: it is best practice
to link an external .js file). This game is going to be played completely from the
console, so don’t worry about putting anything else in there.

b) Create a function called generateRandomNumber that returns a random
integer between 1 and 100. This will be the number the player has to guess.

c) Write a function called getPlayerGuess that prompts the user to enter a
guess and returns the player's input as an integer. Ensure the function handles
invalid input and reprompts the user until they provide a valid number.

d) Write a function called checkGuess that takes two parameters - the
player's guess and the correct number. It should return a string indicating whether
the guess is too low, too high, or correct.

e) Write a function called game that implements the main game logic:
• Generate the random number.
• Initialize a counter for the number of attempts.
• Use a loop to repeatedly prompt the player for guesses until they
guess correctly or use up a maximum of 10 attempts.
• Print a message indicating whether the player has won or lost after
the game ends.
• Print the number of attempts the player used.
Bonus Challenge: Implement a scoring system that rewards the player with
points based on how quickly they guess the correct number.
