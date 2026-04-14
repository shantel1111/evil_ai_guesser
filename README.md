# 🎮 Evil AI: Number Guessing Game
A number guessing game utilizing JS ONLY.

---

# Team Project
A browser game created by me and my teammates.

---

# ✨ Features
- 🎲 Random Number Generation: Every game is a fresh challenge with a secret number between 1 and 100.
- ✅ Smart Input Validation: Handles invalid guesses and re-prompts the user until they provide a real number.
- 📉 Directional Feedback: Tells you exactly if your guess is "Too High" or "Too Low."
- ⏳ Limited Attempts: You only have 10 tries before the AI claims victory.

---

# 🛠️ Technologies Used
- Language: JavaScript (ES6+)
- Environment: Web Browser Console
- UI/UX: HTML (Script linking only)

---

# 🕹️ How to Use
1. Open the index.html file in any modern web browser.
2. Open your Developer Tools (Right-click > Inspect > Console).
3. The game is controlled via the game() function.
4. Follow the browser prompts to enter your guesses.
5. Watch the console for feedback on your progress and your final score! 

---

# 🧩 System Logic
- generateRandomNumber(): Generates the target integer.
- getPlayerGuess(): Manages user prompts and input sanitization.
- checkGuess(): Logical comparison between the guess and the target.
- game(): The engine that runs the loop, tracks attempts, and calculates the score.
