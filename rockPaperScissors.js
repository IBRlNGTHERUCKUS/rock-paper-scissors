function getUserChoice(){
    let userChoice = prompt("Enter Rock, Paper, or Scissors:", "Rock");
    return userChoice.toUpperCase();
}

function getBotChoice() {
    let random = Math.floor((Math.random() * 3)) + 1;
    switch (random) {
        case 1: 
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}

// Returns winner of the round
function playRound() {
    let userChoice = getUserChoice();
    let botChoice = getBotChoice();
 
    console.log(`User Choice: ${userChoice}`);
    console.log(`Bot Choice: ${botChoice}`);

    if (userChoice == botChoice){
        console.log("Tie!");
        return "tie";
    }
    else if (
        (userChoice == "ROCK" && botChoice === "SCISSORS") || 
        (userChoice == "PAPER" && botChoice === "ROCK") ||
        (userChoice == "SCISSORS" && botChoice === "PAPER")
        ) {
            console.log("Congrats User!!!");
            return "user";
        }
    else {
        console.log("You suck!!!");
        return "bot";
    }
}

function game(rounds) {
    let botScore = 0;
    let userScore = 0;

    // Run the game the specified rounds and keep score
    for (let i = 0; i < rounds; i++) {
        let winner = playRound();
        if (winner == 'bot') {
            botScore++;
        }
        else if (winner == 'user') {
            userScore++;
        }
    }

    //Determine a winner of the entire game
    if (userScore > botScore) {
        console.log("User wins game!");
    }
    else if (userScore < botScore) {
        console.log("Bot wins game.");
    }
    else {
        console.log("It's a tie game.");
    }

    //Display the score
    console.log(`User Score: ${userScore}`)
    console.log(`Bot Score: ${botScore}`)
}

game(7);