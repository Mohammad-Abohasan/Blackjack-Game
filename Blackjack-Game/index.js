
let player = {
    name: "Mohammad",
    chips: 145,
    sayWelcome: function() {
        return "Welcome :)"
    }
}

let welcomeEl = document.getElementById("welcome-el")
welcomeEl.textContent = player.sayWelcome()

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
