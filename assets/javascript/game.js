var userGuesses = [];
    var guessesRemaining = 10;
    var wins = 0;
    var losses = 0;
    var userWon = function () {
        guessesRemaining = 10;
        userGuesses = [];
        alert("You won!");
        alert("How did you know I was thinking of the letter " + computerChoice + " ?")
        alert("You must be a psychic!")
    }
    var userLost = function () {
        guessesRemaining = 10;
        userGuesses = [];
        alert("You lose!");
        alert("I was thinking of the letter " + computerChoice + " .")
    }
    

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log("I am thinking of " + computerChoice)

    document.onkeyup = function (event){
       guess = event.key.toLowerCase();
       userGuesses.push(guess);
       if (guess === computerChoice) {
           wins++;
           userWon();
       } else {guessesRemaining--;
       } 
       if (guessesRemaining === 0) {
           losses++;
           userLost();
       }

       document.getElementById("win-counter").innerHTML = "You have won " + wins + " times";
       document.getElementById("losses-counter").innerHTML = "You have lost " + losses + " times";
       document.getElementById("guesses-remaining").innerHTML = "You have " + guessesRemaining + " guesses remaining";
       document.getElementById("user-guesses").innerHTML = "You have guessed " + userGuesses.join(" ");

    };