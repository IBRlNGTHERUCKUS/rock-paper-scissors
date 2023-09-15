const userCards = document.querySelectorAll('.userCard');
const bell = document.querySelector('.bell');
const flavorText = document.querySelector('#flavorText');
const botCardImage = document.querySelector('.botCard');
for (let card of userCards) {
    card.addEventListener('click', selectCard);
}
bell.addEventListener('click', handleBellClick)
let selectedCard = null;
const ROUNDTIME = 3000 //ms

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
function flipCard(cardType = 'cardBack') {
    botCardImage.src = `./images/${cardType}.png`;
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

function playRound() {
    //Stop listening for bell clicks when round starts
    bell.removeEventListener('click', handleBellClick)
    let botCard = getBotCard();
    flipCard(botCard);
    let userCard = selectedCard.id;

    if (userCard == botCard){
        flavorText.textContent = 'Tie!';
    }
    else if (
        (userCard === "rock" && botCard === "scissors") || 
        (userCard === "paper" && botCard === "rock") ||
        (userCard === "scissors" && botCard === "paper")
        ) {
            flavorText.textContent = 'You Win.';
        }
    else {
        flavorText.textContent = 'You Lose.';
    }
    // Unselect the card after each round
    selectedCard.classList.remove('selected');
    selectedCard = null;
    // Flip card and reenable bell at same time
    setTimeout(flipCard, ROUNDTIME);
    setTimeout(()=>{bell.addEventListener('click', handleBellClick)}, ROUNDTIME)
}