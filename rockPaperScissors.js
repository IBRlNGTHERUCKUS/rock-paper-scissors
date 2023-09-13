const userCards = document.querySelectorAll('.userCard img');
for (let card of userCards) {
    card.addEventListener('click', selectCard);
}

let selectedCard = null;

function selectCard(e) {
    // If another card is already selected, unselect it
    if (selectedCard) {
        selectedCard.classList.toggle('selected')
    }
    // If the same card is already selected, unselect it and leave function
    if (selectedCard == e.target) {
        selectedCard = null;
        return;
    }
    selectedCard = e.target;
    selectedCard.classList.toggle('selected');
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
function playRound(selectedCard) {
    let botChoice = getBotChoice();
 
    console.log(`User Choice: ${selectedCard}`);
    console.log(`Bot Choice: ${botChoice}`);

    if (selectedCard == botChoice){
        console.log("Tie!");
        return "tie";
    }
    else if (
        (selectedCard == "ROCK" && botChoice === "SCISSORS") || 
        (selectedCard == "PAPER" && botChoice === "ROCK") ||
        (selectedCard == "SCISSORS" && botChoice === "PAPER")
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