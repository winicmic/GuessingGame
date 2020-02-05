let doThething = function() {

    //Computer picks a number

/* Loops have three parts: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSION; CONTROL INCREMENT/DECREMENT/UPDATE

CONTROL VARIABLE - controls when the loop executes

CONTROL UPDATE - assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false

 */

    let restart = "Yes";
    while(restart === "Yes") {
        let computerNumber = Math.floor((Math.random() * 10) + 1);

        let playersGuess = prompt("Guess a number between 1 and 10.");
        while (playersGuess != computerNumber) {
            if (playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too high, guess again."), 10);
            }else{
                playersGuess = parseInt(prompt("Too low, guess again."), 10);
            }
        }

        alert("YOU GUESSED IT.");

        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive).")
    }

    //Computer picks a number
    //Alert to get player's guess
    //Compare guess to number
    //If higher - alert "too high" and then get player's guess
    //If lower - alert "too low" and then get player's guess
    //If equal - alert "You Win" and then asl to restart
    //If yes - repeat from beginning
    //If no - set computer on fire and escape
};


let doTheotherThing = function(){

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart;
    let playersGuess;

    do{
        let computerNumber = Math.floor((Math.random()*10+1));
        do{
            playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);

            if (playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too high, guess again."), 10);
            }else{
                playersGuess = parseInt(prompt("Too low, guess again."), 10);
            }
        }while(playersGuess != computerNumber);
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive).")

    }while(restart === "Yes");


};