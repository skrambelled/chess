'use strict'

function abs(i) {
    if(i<0)
        return -i;
    return i;
}

function myNumberGame() {
    var want_to_play;
    var answer;
    var max;
    var guess;
    var last_guess;
    var input;

    // debugging
    console.log("invoked myNumberGame()");
 
    want_to_play = prompt("Would you like to play a game?");
    // prompt the user to play a game
    while(want_to_play === "yes") {
        // make the game harder and harder each time you play
        if(!max)
            max = 10;
        else
            max = max*10;
        answer = Math.floor(Math.random() * max);
        last_guess = 0;
        for(var i = 0; i < 5; i++) {
            input = prompt("Enter a number between 1 and "+max);
            guess = parseInt(input);

            console.log(
                "answer     : "+answer+"\n"+
                "guess      : "+guess+"\n"+
                "last_guess : "+last_guess+"\n");

            // we put in some non-number value
            if(!guess && guess !== 0) {
                alert("Thats not even a number! Try again.");
                i--; // dont take away a guess for a non-number guess
            // we guessed outside the allowable range
            } else if(guess <= 0 || guess > max) {
                alert(guess + " is not between 1 and "+max+". Try Again");
                i--; // dont take away a guess for being outside the range
            // got the answer correct!
            } else if(guess === answer) {
                alert("I can't believe you guessed "+answer+"... that's the number I was thinking of, good job!");
                break; // exit the game
            // this is our first guess, so no warmer/colder spam
            } else if(!last_guess) {
                alert("No dice. "+(4-i)+" guesses remaining.");
                last_guess = guess;
            // our last guess was closer to the answer than this guess, colder
            } else if( abs(answer - guess) > abs(answer - last_guess) ) {
                alert("Colder. "+(4-i)+" guesses remaining.");
                last_guess = guess;
            // our last guess was further from the answer than this guess, warmer
            } else if( abs(answer - guess) < abs(answer - last_guess) ) {
                alert("Warmer. "+(4-i)+" guesses remaining.");
                last_guess = guess;
            // our guess is exactly the same distance from the answer as our last guess
            } else {
                if(last_guess === guess)
                  alert("That's the same as your last guess silly!"+(4-i)+" guesses remaining.");
                else
                  alert("Wow, we'll call that lukewarmish. "+(4-i)+" guesses remaining.");
                last_guess = guess;
            }

            if(i>=4)
                alert("You are out of guesses. Game over. I was thinking of "+answer)
        
        }
        want_to_play = prompt("Do you want to play again?");
    }
}