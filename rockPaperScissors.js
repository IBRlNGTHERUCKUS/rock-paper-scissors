const userCards = document.querySelectorAll('.userCard img');
const bell = document.querySelector('.bell');
const flavorText = document.querySelector('#flavorText');
for (let card of userCards) {
    card.addEventListener('click', selectCard);
}
bell.addEventListener('click', handleBellClick)
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
function handleBellClick(e) {
    if (selectedCard) {
        playRound(selectedCard);
    }
    else {
        flavorText.textContent = 'You must choose...';
    }
}

function getBotCard() {
    let random = Math.floor((Math.random() * 3)) + 1;
    switch (random) {
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

// Returns winner of the round
function playRound() {
    let botCard = getBotCard();
    let userCard = selectedCard.id;
    flavorText.innerHTML = `Bot Card: ${botCard}<br>User Card : ${userCard}`;
    if (userCard == botCard){
        flavorText.innerHTML += '<br>Tie!';
    }
    else if (
        (userCard == "rock" && botCard === "scissors") || 
        (userCard == "paper" && botCard === "rock") ||
        (userCard == "scissors" && botCard === "paper")
        ) {
            flavorText.innerHTML += '<br>You Win.';
        }
    else {
        flavorText.innerHTML += '<br>You Lose.';
    }
    selectedCard.classList.remove('selected');
    selectedCard = null
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