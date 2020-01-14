// Define variables

// Computer Choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerChose = [];

window.onload = function () {
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  computerChose.push(computerGuess);
  console.log(computerChose);
}

// User input

// Function for when user presses are key
document.onkeyup = function (event) {
  console.log("event", event)
  var userGuess = event.key;
  console.log(userGuess);

// Makes sure a letter is selected
  var charCode = typeof event.which == "letter" ? event.which : event.keyCode;
  if (charCode) {
    lettersGuessed.push(String.fromCharCode(charCode));

// When user = computer guess - win and guesses are left and resets
    if ((userGuess === computerChose[0]) && (guessesLeft > 0)) {
      wins++;
      console.log("you win");
      guessesLeft = 9;
      lettersGuessed = [];
      computerChose = [];
      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
      computerChose.push(computerGuess);
      console.log(computerChose[0]);
    }

  // When user guess is not strictly equal to computer choice, but guesses are left
    if ((userGuess !== computerChose[0]) && (guessesLeft > 0)) {
      guessesLeft--;
      console.log("guess again");
    }

  // When user guess is not strictly equal to computer choice, but no guesses are left and reset
    if ((userGuess !== computerChose[0]) && (guessesLeft <= 0)) {
      guessesLeft = 9;
      losses++;
      lettersGuessed = [];
      console.log("you lose");
      computerChose = [];
      console.log(computerChose[0]);

    }

    // Creating a variable to hold our new HTML. HTML will keep track of user gueses, wins, losses
    var html =
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>guesses left: " + guessesLeft + "</p>" +
      "<p>letters guessed: " + lettersGuessed + "</p>";


    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;


  }
}