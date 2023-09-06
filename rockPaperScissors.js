function getUserChoice(){
    let userChoice = prompt("Enter Rock, Paper, or Scissors:", "Rock");
    return userChoice.toUpperCase();
}

function getBotChoice() {
    let random = floor(Math.random() * 3);
    switch (random) {
        case 1: 
            return "ROCK"
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}

function rockPaperScissors() {
    let userChoice = getUserChoice();
    let botChoice = getBotChoice();
    let winner;
    
    console.log(`User Choice: ${userChoice}`);
    console.log(`User Choice: ${botChoice}`);

    if (userChoice == botChoice){
        console.log("Tie!");
    }
    else if (
        (userChoice == "ROCK" && botChoice === "SCISSORS") || 
        (userChoice == "PAPER" && botChoice === "ROCK") ||
        (userChoice == "SCISSORS" && botChoice === "PAPER")
        ) {console.log("Congrats User!!!");}
    else {console.log("You suck!!!")}


}