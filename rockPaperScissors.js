const userCards = document.querySelectorAll('.userCard');
const bell = document.querySelector('.bell');
const flavorText = document.querySelector('#flavorText');
const botCardImage = document.querySelector('.botCard');
const audio = document.querySelector('audio');
const userScore = document.querySelector('.userScore');
let uScore = 0; // integer value representing points
const botScore = document.querySelector('.botScore');
let bScore = 0; // integer value representing points

for (let card of userCards) {
    card.addEventListener('click', selectCard);
}
bell.addEventListener('click', handleBellClick)
let selectedCard = null;
const ROUNDTIME = 3000 //ms
const TYPEWRITERSPEED = 120; //ms

function typeWriter(txt, speed = TYPEWRITERSPEED, i = 0) { //speed in ms
    if (i == 0){
        flavorText.textContent = '';
    }
    if (i < txt.length){
        flavorText.textContent+=txt[i];
        i++;
        setTimeout(typeWriter, speed, txt, speed, i);
    }
}

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
        audio.currentTime = 0;
        audio.play();
        playRound(selectedCard);
    }
    else {
        typeWriter('You must choose...');
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
    // Only allow this flavor text once per round
    const options = {once:true};
    botCardImage.addEventListener('click', ()=>typeWriter('No Peeking...'), options);
    //Stop listening for bell clicks when round starts
    bell.removeEventListener('click', handleBellClick)
    let botCard = getBotCard();
    flipCard(botCard);
    let userCard = selectedCard.id;

    if (userCard == botCard){
        typeWriter('Tie!');
    }
    else if (
        (userCard === "rock" && botCard === "scissors") || 
        (userCard === "paper" && botCard === "rock") ||
        (userCard === "scissors" && botCard === "paper")
        ) {
            typeWriter('You Win.');
            uScore++;
            userScore.textContent = `You: ${uScore}`;
        }
    else {
        typeWriter('You Lose.');
        bScore++;
        botScore.textContent = `It: ${bScore}`;

    }
    // Unselect the card after each round
    selectedCard.classList.remove('selected');
    selectedCard = null;
    // Flip card and reenable bell at same time
    setTimeout(flipCard, ROUNDTIME);
    setTimeout(()=>{bell.addEventListener('click', handleBellClick)}, ROUNDTIME)
}